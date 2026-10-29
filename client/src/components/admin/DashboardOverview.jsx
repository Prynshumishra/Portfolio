import {
  FolderKanban,
  Inbox,
  Mail,
  CheckCircle2,
  Plus,
  ArrowRight,
  Download,
  Briefcase,
  Code2,
  ExternalLink,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STATUS_BADGE = {
  unread: "bg-[#FEF3C7] text-[#92400E] border-[#F59E0B]/40",
  read: "bg-[#F2ECE4] text-[#5C4033] border-[#D5C7B8]",
  replied: "bg-[#DCFCE7] text-[#166534] border-[#22C55E]/40",
};

function formatRelative(iso) {
  if (!iso) return "—";
  try {
    const diffMs = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  } catch {
    return "—";
  }
}

export const DashboardOverview = ({
  projects,
  contacts,
  onNavigateTab,
  onOpenNewProject,
  onSelectContact,
  onExportCSV,
}) => {
  const totalProjects = projects.length;
  const clientProjects = projects.filter((p) => p.category === "client").length;
  const personalProjects = projects.filter((p) => p.category === "personal").length;

  const totalContacts = contacts.length;
  const unreadContacts = contacts.filter((c) => (c.status || "unread") === "unread").length;
  const repliedContacts = contacts.filter((c) => c.status === "replied").length;
  const readContacts = contacts.filter((c) => c.status === "read").length;

  const recentContacts = contacts.slice(0, 5);
  const recentProjects = projects.slice(0, 5);

  return (
    <div className="space-y-6 text-left">
      {/* KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#5A4D44]">
              // total_projects
            </span>
            <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9]">
              <FolderKanban size={15} className="text-[#231915]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#231915] mt-3 font-mono">{totalProjects}</p>
          <p className="text-xs text-[#5A4D44] mt-1 font-mono">
            {clientProjects} client · {personalProjects} personal
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#5A4D44]">
              // total_inquiries
            </span>
            <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9]">
              <Inbox size={15} className="text-[#231915]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#231915] mt-3 font-mono">{totalContacts}</p>
          <p className="text-xs text-[#5A4D44] mt-1 font-mono">
            {readContacts} read · {repliedContacts} replied
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#5A4D44]">
              // unread_messages
            </span>
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/30">
              <Mail size={15} className="text-[#92400E]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#231915] mt-3 font-mono">{unreadContacts}</p>
          <p className="text-xs text-[#5A4D44] mt-1">
            {unreadContacts > 0 ? "Pending review in inbox" : "All caught up"}
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#5A4D44]">
              // handled_inquiries
            </span>
            <div className="p-2.5 rounded-xl bg-[#DCFCE7] border border-[#22C55E]/30">
              <CheckCircle2 size={15} className="text-[#166534]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#231915] mt-3 font-mono">
            {repliedContacts + readContacts}
          </p>
          <p className="text-xs text-[#5A4D44] mt-1">
            {repliedContacts} directly replied via email
          </p>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="p-5 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#5C4033] font-semibold">
            // quick_actions
          </p>
          <h2 className="text-base font-bold text-[#231915] mt-0.5">
            Portfolio Content & Inquiry Operations
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenNewProject}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer"
          >
            <Plus size={14} /> add_new_project()
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab("contacts")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] hover:border-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer"
          >
            <Inbox size={14} /> open_inbox ({unreadContacts} unread)
          </button>
          <button
            type="button"
            onClick={onExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] hover:border-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer"
          >
            <Download size={14} /> export_contacts_csv()
          </button>
        </div>
      </div>

      {/* Two-Column Split: Recent Inquiries & Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Recent Inquiries (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E2D7C9] bg-[#FAF7F2] flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5C4033] font-semibold">
                // inbox_stream
              </span>
              <h3 className="text-sm font-bold text-[#231915] mt-0.5">Recent Contact Inquiries</h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab("contacts")}
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#5C4033] hover:text-[#231915] cursor-pointer"
            >
              view_all <ArrowRight size={13} />
            </button>
          </div>

          {recentContacts.length === 0 ? (
            <div className="p-10 text-center">
              <p className="font-mono text-xs text-[#5A4D44]">No contact inquiries received yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#E2D7C9]/70">
              {recentContacts.map((item) => {
                const status = item.status || "unread";
                return (
                  <div
                    key={item._id}
                    onClick={() => onSelectContact(item._id)}
                    className="px-6 py-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-[#231915] truncate">{item.name}</p>
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded-md font-mono text-[10px] font-semibold border",
                            STATUS_BADGE[status] || STATUS_BADGE.unread
                          )}
                        >
                          {status}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-[#5C4033] truncate mt-0.5">
                        {item.subject}
                      </p>
                      <p className="text-xs text-[#5A4D44] line-clamp-1 mt-1">{item.message}</p>
                    </div>
                    <span className="font-mono text-[10px] text-[#5A4D44] shrink-0 flex items-center gap-1">
                      <Clock size={10} /> {formatRelative(item.createdAt)}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent / Active Projects (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E2D7C9] bg-[#FAF7F2] flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5C4033] font-semibold">
                // portfolio_catalog
              </span>
              <h3 className="text-sm font-bold text-[#231915] mt-0.5">Active Portfolio Projects</h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab("projects")}
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#5C4033] hover:text-[#231915] cursor-pointer"
            >
              manage_projects <ArrowRight size={13} />
            </button>
          </div>

          {recentProjects.length === 0 ? (
            <div className="p-10 text-center">
              <p className="font-mono text-xs text-[#5A4D44]">No projects configured yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#E2D7C9]/70">
              {recentProjects.map((proj) => {
                const isClient = proj.category === "client";
                return (
                  <div
                    key={proj._id || proj.title}
                    onClick={() => onNavigateTab("projects")}
                    className="px-6 py-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-[#231915] truncate">{proj.title}</p>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold",
                            isClient
                              ? "bg-[#231915] text-[#FAF7F2]"
                              : "bg-[#F2ECE4] text-[#5C4033] border border-[#E2D7C9]"
                          )}
                        >
                          {isClient ? <Briefcase size={9} /> : <Code2 size={9} />}
                          {isClient ? "Client" : "Personal"}
                        </span>
                      </div>
                      <p className="text-xs text-[#5A4D44] line-clamp-1 mt-1">{proj.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] px-2 py-1 rounded-lg bg-[#FAF7F2] border border-[#E2D7C9] text-[#5A4D44]">
                        {proj.tech?.length || 0} tech
                      </span>
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] hover:border-[#5C4033]"
                          title="Open Live Demo"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
