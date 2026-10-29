import { useState, useMemo } from "react";
import {
  Search,
  Trash2,
  Inbox,
  Copy,
  Reply,
  User,
  Calendar,
  Tag,
  MessageSquare,
  Download,
} from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

const STATUS_META = {
  unread: {
    label: "unread",
    badgeClass: "bg-[#FEF3C7] text-[#92400E] border-[#F59E0B]/40",
    dotClass: "bg-[#D97706]",
  },
  read: {
    label: "read",
    badgeClass: "bg-[#F2ECE4] text-[#5C4033] border-[#D5C7B8]",
    dotClass: "bg-[#8C7A6B]",
  },
  replied: {
    label: "replied",
    badgeClass: "bg-[#DCFCE7] text-[#166534] border-[#22C55E]/40",
    dotClass: "bg-[#16A34A]",
  },
};

function formatDateTime(iso) {
  if (!iso) return "—";
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(iso);
  }
}

function formatRelative(iso) {
  if (!iso) return "No messages yet";
  try {
    const diffMs = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return formatDateTime(iso);
  } catch {
    return "—";
  }
}

export const ContactsManager = ({
  contacts,
  selectedId,
  onSelectId,
  onStatusChange,
  onDeleteContact,
  onExportCSV,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const uniqueSubjects = useMemo(() => {
    const set = new Set(contacts.map((c) => c.subject).filter(Boolean));
    return Array.from(set);
  }, [contacts]);

  const filteredContacts = useMemo(() => {
    return contacts.filter((c) => {
      const status = c.status || "unread";
      if (statusFilter !== "all" && status !== statusFilter) return false;
      if (subjectFilter !== "all" && c.subject !== subjectFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.name?.toLowerCase().includes(q);
        const matchEmail = c.email?.toLowerCase().includes(q);
        const matchSub = c.subject?.toLowerCase().includes(q);
        const matchMsg = c.message?.toLowerCase().includes(q);
        if (!matchName && !matchEmail && !matchSub && !matchMsg) return false;
      }
      return true;
    });
  }, [contacts, statusFilter, subjectFilter, searchQuery]);

  const stats = useMemo(() => {
    const total = contacts.length;
    const unread = contacts.filter((c) => (c.status || "unread") === "unread").length;
    const read = contacts.filter((c) => c.status === "read").length;
    const replied = contacts.filter((c) => c.status === "replied").length;
    return { total, unread, read, replied };
  }, [contacts]);

  const selectedContact = useMemo(() => {
    return (
      filteredContacts.find((c) => c._id === selectedId) ||
      contacts.find((c) => c._id === selectedId) ||
      filteredContacts[0] ||
      null
    );
  }, [filteredContacts, contacts, selectedId]);

  return (
    <div className="space-y-6 text-left">
      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A4D44]"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by sender name, email, subject, or message..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: `all (${stats.total})` },
            { id: "unread", label: `unread (${stats.unread})` },
            { id: "read", label: `read (${stats.read})` },
            { id: "replied", label: `replied (${stats.replied})` },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              className={cn(
                "px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer border",
                statusFilter === tab.id
                  ? "bg-[#231915] text-[#FAF7F2] border-[#231915]"
                  : "bg-[#FAF7F2] text-[#5A4D44] border-[#E2D7C9] hover:border-[#5C4033] hover:text-[#231915]"
              )}
            >
              {tab.label}
            </button>
          ))}

          {uniqueSubjects.length > 0 && (
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="px-3.5 py-2 rounded-xl font-mono text-xs bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none cursor-pointer"
            >
              <option value="all">all_subjects()</option>
              {uniqueSubjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}

          <button
            type="button"
            onClick={onExportCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] hover:border-[#5C4033] font-mono text-xs font-semibold cursor-pointer"
          >
            <Download size={13} /> export_csv()
          </button>
        </div>
      </div>

      {/* Main 12-Col Master-Detail Workspace */}
      {filteredContacts.length === 0 ? (
        <div className="p-14 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] text-center max-w-xl mx-auto my-8">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E2D7C9] flex items-center justify-center mx-auto mb-4">
            <Inbox size={22} className="text-[#5C4033]" />
          </div>
          <h2 className="text-lg font-bold text-[#231915]">No contact inquiries found</h2>
          <p className="text-xs text-[#5A4D44] mt-1.5 leading-relaxed">
            {contacts.length === 0
              ? "When visitors submit the contact form on your portfolio, their messages will appear here in real time."
              : "No messages match your current search or filter criteria."}
          </p>
          {contacts.length > 0 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                  setSubjectFilter("all");
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer"
              >
                reset_filters()
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Inquiries List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {filteredContacts.map((item) => {
              const status = item.status || "unread";
              const meta = STATUS_META[status] || STATUS_META.unread;
              const isSelected = selectedContact?._id === item._id;

              return (
                <div
                  key={item._id}
                  onClick={() => {
                    onSelectId(item._id);
                    setConfirmDeleteId(null);
                    if (status === "unread") {
                      onStatusChange(item, "read");
                    }
                  }}
                  className={cn(
                    "p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "bg-[#FFFFFF] border-[#231915] shadow-[0_10px_28px_-10px_rgba(35,25,21,0.16)]"
                      : "bg-[#FFFFFF] border-[#E2D7C9] hover:border-[#B8A390]"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold shrink-0 border",
                          status === "unread"
                            ? "bg-[#231915] text-[#FAF7F2] border-[#231915]"
                            : "bg-[#FAF7F2] text-[#231915] border-[#E2D7C9]"
                        )}
                      >
                        {item.name?.slice(0, 2).toUpperCase() || "IN"}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-bold text-[#231915] truncate">
                            {item.name}
                          </h3>
                          <span
                            className={cn(
                              "inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono text-[10px] font-semibold border",
                              meta.badgeClass
                            )}
                          >
                            <span className={cn("w-1.5 h-1.5 rounded-full", meta.dotClass)} />
                            {meta.label}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-[#5A4D44] truncate mt-0.5">
                          {item.email}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-[11px] text-[#5A4D44] shrink-0">
                      {formatRelative(item.createdAt)}
                    </span>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-[#E2D7C9]/70">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C9] font-mono text-[10px] font-semibold text-[#5C4033]">
                        {item.subject}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A4D44] line-clamp-2 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Message Inspector (5 Cols) */}
          {selectedContact && (
            <div className="lg:col-span-5 lg:sticky lg:top-24 terminal-card overflow-hidden text-left">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2D7C9] bg-[#F2ECE4]/70">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="font-mono text-xs text-[#5A4D44] ml-1.5">
                    inquiry_inspector.json
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#5A4D44]">mongodb_record</span>
              </div>

              <div className="p-6 sm:p-7 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <User size={13} className="text-[#5C4033]" />
                      <h2 className="text-lg font-bold text-[#231915]">{selectedContact.name}</h2>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={`mailto:${selectedContact.email}`}
                        className="font-mono text-xs text-[#5C4033] hover:text-[#231915] underline"
                      >
                        {selectedContact.email}
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(selectedContact.email);
                          toast.success("Email copied to clipboard.");
                        }}
                        className="p-1 rounded-md hover:bg-[#FAF7F2] text-[#5A4D44] hover:text-[#231915] cursor-pointer"
                        title="Copy email"
                      >
                        <Copy size={12} />
                      </button>
                    </div>
                  </div>

                  {confirmDeleteId === selectedContact._id ? (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={async () => {
                          await onDeleteContact(selectedContact);
                          setConfirmDeleteId(null);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-[#B93829] text-[#FFFFFF] font-mono text-[10px] font-semibold cursor-pointer"
                      >
                        confirm
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(null)}
                        className="px-2.5 py-1.5 rounded-lg border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-mono text-[10px] cursor-pointer"
                      >
                        cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmDeleteId(selectedContact._id)}
                      className="p-2 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#B93829] hover:bg-[#B93829] hover:text-[#FFFFFF] hover:border-[#B93829] transition-all cursor-pointer"
                      title="Delete inquiry"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9]">
                  <div>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#5A4D44]">
                      <Tag size={10} /> subject
                    </span>
                    <p className="font-mono text-xs font-semibold text-[#231915] mt-1">
                      {selectedContact.subject}
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#5A4D44]">
                      <Calendar size={10} /> received_at
                    </span>
                    <p className="font-mono text-xs font-semibold text-[#231915] mt-1">
                      {formatDateTime(selectedContact.createdAt)}
                    </p>
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#5A4D44] mb-2">
                    <MessageSquare size={11} /> message_payload
                  </span>
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9] text-sm text-[#231915] leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedContact.message}
                  </div>
                </div>

                {/* Status Controls */}
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#5A4D44] mb-2">
                    // update_status
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {["unread", "read", "replied"].map((st) => {
                      const active = (selectedContact.status || "unread") === st;
                      return (
                        <button
                          key={st}
                          type="button"
                          onClick={() => onStatusChange(selectedContact, st)}
                          className={cn(
                            "py-2 px-3 rounded-xl font-mono text-xs font-semibold border transition-all cursor-pointer",
                            active
                              ? "bg-[#231915] text-[#FAF7F2] border-[#231915]"
                              : "bg-[#FAF7F2] text-[#5A4D44] border-[#E2D7C9] hover:border-[#5C4033] hover:text-[#231915]"
                          )}
                        >
                          {st}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Reply Action */}
                <div className="pt-2">
                  <a
                    href={`mailto:${selectedContact.email}?subject=${encodeURIComponent(
                      `Re: ${selectedContact.subject}`
                    )}&body=${encodeURIComponent(
                      `Hi ${selectedContact.name},\n\nThank you for reaching out regarding "${selectedContact.subject}".\n\nBest regards,\nPriyanshu Mishra`
                    )}`}
                    onClick={() => onStatusChange(selectedContact, "replied")}
                    className="w-full py-3 rounded-xl font-mono text-xs font-semibold bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] flex items-center justify-center gap-2 transition-all shadow-[0_6px_20px_rgba(35,25,21,0.16)]"
                  >
                    <Reply size={14} /> reply_via_email()
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
