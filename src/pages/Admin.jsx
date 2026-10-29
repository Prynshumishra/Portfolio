import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  RefreshCw,
  LogOut,
  Database,
  LayoutDashboard,
  FolderKanban,
  Inbox,
  ExternalLink,
} from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { ProjectsManager } from "@/components/admin/ProjectsManager";
import { ContactsManager } from "@/components/admin/ContactsManager";

const SESSION_STORAGE_KEY = import.meta.env.VITE_SESSION_STORAGE_KEY;

function loadValidSession() {
  try {
    if (!SESSION_STORAGE_KEY) return null;
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      !parsed ||
      typeof parsed.token !== "string" ||
      typeof parsed.expiresAt !== "number" ||
      Date.now() >= parsed.expiresAt
    ) {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    if (SESSION_STORAGE_KEY) sessionStorage.removeItem(SESSION_STORAGE_KEY);
    return null;
  }
}

function sanitizeCSVField(val) {
  const str = String(val ?? "");
  const safe = /^[=+\-@\t\r]/.test(str) ? `'${str}` : str;
  return `"${safe.replace(/"/g, '""')}"`;
}

const NAV_TABS = [
  { id: "dashboard", label: "dashboard()", title: "Dashboard Overview", icon: LayoutDashboard },
  { id: "projects", label: "projects()", title: "Projects Manager", icon: FolderKanban },
  { id: "contacts", label: "contacts()", title: "Contacts Inbox", icon: Inbox },
];

export const Admin = () => {
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const [session, setSession] = useState(() => loadValidSession());
  const [authLoading, setAuthLoading] = useState(false);

  const [activeTab, setActiveTab] = useState("dashboard");
  const [openProjectEditorSignal, setOpenProjectEditorSignal] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = Boolean(session?.token);

  const handleLogout = useCallback((reason) => {
    if (SESSION_STORAGE_KEY) sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setSession(null);
    setContacts([]);
    setProjects([]);
    setSelectedContactId(null);
    if (reason) toast.error(reason);
    else toast.success("Signed out of admin panel.");
  }, []);

  // Automatically expire session when token TTL elapses
  useEffect(() => {
    if (!session?.expiresAt) return;
    const remainingMs = session.expiresAt - Date.now();
    if (remainingMs <= 0) {
      handleLogout("Session expired. Please sign in again.");
      return;
    }
    const timer = setTimeout(() => {
      handleLogout("Session expired. Please sign in again.");
    }, remainingMs);
    return () => clearTimeout(timer);
  }, [session, handleLogout]);

  const fetchAllData = useCallback(
    async (activeToken = session?.token, showToast = false) => {
      if (!activeToken) return;
      setLoading(true);

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${activeToken}`,
        };

        const [contactsRes, projectsRes] = await Promise.all([
          fetch(`${apiUrl}/api/admin/contacts`, { headers }),
          fetch(`${apiUrl}/api/admin/projects`, { headers }),
        ]);

        if (contactsRes.status === 401 || projectsRes.status === 401) {
          handleLogout("Admin session expired or unauthorized.");
          return;
        }

        const contactsData = await contactsRes.json().catch(() => ({}));
        const projectsData = await projectsRes.json().catch(() => ({}));

        if (contactsRes.ok && Array.isArray(contactsData.contacts)) {
          setContacts(contactsData.contacts);
          if (contactsData.contacts.length > 0 && !selectedContactId) {
            setSelectedContactId(contactsData.contacts[0]._id);
          }
        }

        if (projectsRes.ok && Array.isArray(projectsData.projects)) {
          setProjects(projectsData.projects);
        }

        if (showToast) toast.success("Synced with MongoDB server.");
      } catch {
        toast.error("Unable to reach backend server.");
      } finally {
        setLoading(false);
      }
    },
    [session?.token, apiUrl, selectedContactId, handleLogout]
  );

  useEffect(() => {
    if (isAuthenticated && session?.token) {
      fetchAllData(session.token, false);
    }
  }, [isAuthenticated, session?.token, fetchAllData]);

  const handleLogin = async (rawKey) => {
    const trimmed = rawKey.trim();
    if (!trimmed) {
      toast.error("Please enter the admin access key.");
      return;
    }

    setAuthLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success && data.token) {
        const newSession = {
          token: data.token,
          expiresAt: data.expiresAt || Date.now() + 2 * 60 * 60 * 1000,
        };
        if (SESSION_STORAGE_KEY) {
          sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
        }
        setSession(newSession);
        toast.success("Admin access granted.");
      } else {
        toast.error(data.error || "Invalid admin access key.");
      }
    } catch {
      toast.error("Authentication failed: backend server unreachable.");
    } finally {
      setAuthLoading(false);
    }
  };

  // ── Contacts Handlers ──────────────────────────────────────────────────────
  const handleStatusChange = async (contact, newStatus) => {
    if (!session?.token) return;
    const id = contact._id;
    const previousStatus = contact.status || "unread";

    setContacts((prev) =>
      prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
    );

    try {
      const res = await fetch(`${apiUrl}/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.status === 401) {
        handleLogout("Session expired. Please sign in again.");
        return;
      }

      if (!res.ok) throw new Error("Failed to update status");
      toast.success(`Marked as ${newStatus}.`);
    } catch {
      setContacts((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: previousStatus } : c))
      );
      toast.error("Failed to update status on server.");
    }
  };

  const handleDeleteContact = async (contact) => {
    if (!session?.token) return;
    const id = contact._id;

    try {
      const res = await fetch(`${apiUrl}/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      if (res.status === 401) {
        handleLogout("Session expired. Please sign in again.");
        return;
      }

      if (!res.ok) throw new Error("Delete failed");

      setContacts((prev) => {
        const remaining = prev.filter((c) => c._id !== id);
        if (selectedContactId === id) {
          setSelectedContactId(remaining[0]?._id || null);
        }
        return remaining;
      });
      toast.success("Contact inquiry deleted.");
    } catch {
      toast.error("Failed to delete contact inquiry.");
    }
  };

  const handleExportCSV = () => {
    if (contacts.length === 0) {
      toast.error("No contacts to export.");
      return;
    }
    const headers = ["Name", "Email", "Subject", "Status", "Date", "Message"];
    const rows = contacts.map((c) => [
      sanitizeCSVField(c.name),
      sanitizeCSVField(c.email),
      sanitizeCSVField(c.subject),
      sanitizeCSVField(c.status || "unread"),
      sanitizeCSVField(new Date(c.createdAt).toISOString()),
      sanitizeCSVField(c.message),
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `priyanshu_portfolio_contacts_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported contacts to CSV.");
  };

  // ── Projects Handlers ──────────────────────────────────────────────────────
  const handleCreateProject = async (payload) => {
    if (!session?.token) return false;
    try {
      const res = await fetch(`${apiUrl}/api/admin/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 401) {
        handleLogout("Session expired. Please sign in again.");
        return false;
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.project) {
        toast.error(data.error || "Failed to create project.");
        return false;
      }

      setProjects((prev) =>
        [...prev, data.project].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      );
      toast.success("Project created.");
      return true;
    } catch {
      toast.error("Failed to create project.");
      return false;
    }
  };

  const handleUpdateProject = async (id, payload) => {
    if (!session?.token) return false;
    try {
      const res = await fetch(`${apiUrl}/api/admin/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 401) {
        handleLogout("Session expired. Please sign in again.");
        return false;
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.project) {
        toast.error(data.error || "Failed to update project.");
        return false;
      }

      setProjects((prev) =>
        prev
          .map((p) => (p._id === id ? data.project : p))
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      );
      toast.success("Project updated.");
      return true;
    } catch {
      toast.error("Failed to update project.");
      return false;
    }
  };

  const handleDeleteProject = async (id) => {
    if (!session?.token) return false;
    try {
      const res = await fetch(`${apiUrl}/api/admin/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      if (res.status === 401) {
        handleLogout("Session expired. Please sign in again.");
        return false;
      }

      if (!res.ok) {
        toast.error("Failed to delete project.");
        return false;
      }

      setProjects((prev) => prev.filter((p) => p._id !== id));
      toast.success("Project deleted.");
      return true;
    } catch {
      toast.error("Failed to delete project.");
      return false;
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} authLoading={authLoading} />;
  }

  const unreadCount = contacts.filter((c) => (c.status || "unread") === "unread").length;
  const activeTabMeta = NAV_TABS.find((t) => t.id === activeTab) || NAV_TABS[0];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-[#E2D7C9] bg-[#FAF7F2]/95 backdrop-blur-md">
        <div className="container mx-auto py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs bg-[#231915] text-[#FAF7F2]">
              PM
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[#231915]">
                  ~/admin-portfolio
                </span>
                
              </div>
              <p className="font-mono text-[11px] text-[#5A4D44] hidden sm:block">
                {activeTabMeta.title}
              </p>
            </div>
          </div>

          {/* Center / Inline Tab Navigation */}
          <nav className="flex items-center gap-1.5 p-1 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF]">
            {NAV_TABS.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={cn(
                    "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer",
                    isActive
                      ? "bg-[#231915] text-[#FAF7F2] shadow-2xs"
                      : "text-[#5A4D44] hover:text-[#231915] hover:bg-[#FAF7F2]"
                  )}
                >
                  <Icon size={13} />
                  <span>{label}</span>
                  {id === "projects" && (
                    <span
                      className={cn(
                        "px-1.5 py-0.2 rounded-full text-[10px]",
                        isActive ? "bg-[#5C4033] text-[#FAF7F2]" : "bg-[#F2ECE4] text-[#231915]"
                      )}
                    >
                      {projects.length}
                    </span>
                  )}
                  {id === "contacts" && unreadCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#F59E0B] text-[#231915] font-bold">
                      {unreadCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] hover:border-[#5C4033] font-mono text-xs font-semibold transition-all"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">view_site()</span>
            </Link>
            <button
              type="button"
              onClick={() => fetchAllData(session?.token, true)}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] hover:border-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw size={13} className={cn(loading && "animate-spin")} />
              <span className="hidden sm:inline">sync()</span>
            </button>
            <button
              type="button"
              onClick={() => handleLogout()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">sign_out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto py-8 flex-1">
        {activeTab === "dashboard" && (
          <DashboardOverview
            projects={projects}
            contacts={contacts}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenNewProject={() => {
              setActiveTab("projects");
              setOpenProjectEditorSignal(true);
            }}
            onSelectContact={(id) => {
              setSelectedContactId(id);
              setActiveTab("contacts");
            }}
            onExportCSV={handleExportCSV}
          />
        )}

        {activeTab === "projects" && (
          <ProjectsManager
            projects={projects}
            onCreateProject={handleCreateProject}
            onUpdateProject={handleUpdateProject}
            onDeleteProject={handleDeleteProject}
            openEditorSignal={openProjectEditorSignal}
            onClearEditorSignal={() => setOpenProjectEditorSignal(false)}
          />
        )}

        {activeTab === "contacts" && (
          <ContactsManager
            contacts={contacts}
            selectedId={selectedContactId}
            onSelectId={setSelectedContactId}
            onStatusChange={handleStatusChange}
            onDeleteContact={handleDeleteContact}
            onExportCSV={handleExportCSV}
          />
        )}
      </main>
    </div>
  );
};
