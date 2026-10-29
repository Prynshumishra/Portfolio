import { useState, useMemo } from "react";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  ExternalLink,
  Github,
  Briefcase,
  Code2,
  X,
  Save,
  Layers,
  Image as ImageIcon,
  Hash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const EMPTY_FORM = {
  title: "",
  category: "personal",
  image: "",
  desc: "",
  techInput: "",
  github: "",
  demo: "",
  order: 1,
};

export const ProjectsManager = ({
  projects,
  onCreateProject,
  onUpdateProject,
  onDeleteProject,
  openEditorSignal,
  onClearEditorSignal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Open new project modal when triggered from DashboardOverview
  if (openEditorSignal && !isEditorOpen) {
    setEditingId(null);
    setForm({ ...EMPTY_FORM, order: projects.length + 1 });
    setIsEditorOpen(true);
    onClearEditorSignal?.();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const openCreateModal = () => {
    setEditingId(null);
    setForm({ ...EMPTY_FORM, order: projects.length + 1 });
    setIsEditorOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openEditModal = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title || "",
      category: project.category || "personal",
      image: project.image || "",
      desc: project.desc || "",
      techInput: Array.isArray(project.tech) ? project.tech.join(", ") : "",
      github: project.github || "",
      demo: project.demo || "",
      order: project.order ?? 1,
    });
    setIsEditorOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || form.title.trim().length < 2) {
      toast.error("Project title must be at least 2 characters.");
      return;
    }
    if (!form.desc.trim() || form.desc.trim().length < 10) {
      toast.error("Description must be at least 10 characters.");
      return;
    }

    const techArray = form.techInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title: form.title.trim(),
      category: form.category,
      image: form.image.trim(),
      desc: form.desc.trim(),
      tech: techArray,
      github: form.github.trim(),
      demo: form.demo.trim(),
      order: Number(form.order) || 1,
    };

    setSaving(true);
    try {
      const ok = editingId
        ? await onUpdateProject(editingId, payload)
        : await onCreateProject(payload);
      if (ok) {
        closeEditor();
      }
    } finally {
      setSaving(false);
    }
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title?.toLowerCase().includes(q);
        const matchDesc = p.desc?.toLowerCase().includes(q);
        const matchTech = Array.isArray(p.tech) && p.tech.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTech) return false;
      }
      return true;
    });
  }, [projects, categoryFilter, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: projects.length,
      client: projects.filter((p) => p.category === "client").length,
      personal: projects.filter((p) => p.category === "personal").length,
    };
  }, [projects]);

  return (
    <div className="space-y-6 text-left">
      {/* Toolbar */}
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
            placeholder="Search projects by title, description, or tech stack..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: `all (${counts.all})`, icon: Layers },
            { id: "client", label: `client (${counts.client})`, icon: Briefcase },
            { id: "personal", label: `personal (${counts.personal})`, icon: Code2 },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setCategoryFilter(id)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer border",
                categoryFilter === id
                  ? "bg-[#231915] text-[#FAF7F2] border-[#231915]"
                  : "bg-[#FAF7F2] text-[#5A4D44] border-[#E2D7C9] hover:border-[#5C4033] hover:text-[#231915]"
              )}
            >
              <Icon size={12} /> {label}
            </button>
          ))}

          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] font-mono text-xs font-semibold transition-all cursor-pointer"
          >
            <Plus size={14} /> add_project()
          </button>
        </div>
      </div>

      {/* Add / Edit Project Editor Panel */}
      {isEditorOpen && (
        <div className="terminal-card overflow-hidden border-2 border-[#231915]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2D7C9] bg-[#F2ECE4]/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-xs font-semibold text-[#231915] ml-2">
                {editingId ? "edit_project.ts" : "create_project.ts"}
              </span>
            </div>
            <button
              type="button"
              onClick={closeEditor}
              className="p-1.5 rounded-lg hover:bg-[#FAF7F2] text-[#5A4D44] hover:text-[#231915] cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Title */}
              <div className="md:col-span-6">
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // project_title *
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Savoria"
                  className="w-full px-4 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
                  required
                />
              </div>

              {/* Category */}
              <div className="md:col-span-4">
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // category *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["client", "personal"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setForm({ ...form, category: cat })}
                      className={cn(
                        "py-2.5 px-3 rounded-xl font-mono text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer transition-all",
                        form.category === cat
                          ? "bg-[#231915] text-[#FAF7F2] border-[#231915]"
                          : "bg-[#FAF7F2] text-[#5A4D44] border-[#E2D7C9] hover:border-[#5C4033]"
                      )}
                    >
                      {cat === "client" ? <Briefcase size={12} /> : <Code2 size={12} />}
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order */}
              <div className="md:col-span-2">
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // order
                </label>
                <div className="relative">
                  <Hash
                    size={12}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5A4D44]"
                  />
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: e.target.value })}
                    className="w-full pl-8 pr-3 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Image URL */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // image_url
                </label>
                <div className="relative">
                  <ImageIcon
                    size={12}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A4D44]"
                  />
                  <input
                    type="text"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="/projects/app.png or https://..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
                  />
                </div>
              </div>

              {/* Live Demo URL */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // live_demo_url
                </label>
                <div className="relative">
                  <ExternalLink
                    size={12}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A4D44]"
                  />
                  <input
                    type="url"
                    value={form.demo}
                    onChange={(e) => setForm({ ...form, demo: e.target.value })}
                    placeholder="https://example.vercel.app/"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
                  />
                </div>
              </div>

              {/* GitHub URL */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // github_repo_url
                </label>
                <div className="relative">
                  <Github
                    size={12}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5A4D44]"
                  />
                  <input
                    type="url"
                    value={form.github}
                    onChange={(e) => setForm({ ...form, github: e.target.value })}
                    placeholder="https://github.com/Prynshumishra/..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                // tech_stack (comma separated)
              </label>
              <input
                type="text"
                value={form.techInput}
                onChange={(e) => setForm({ ...form, techInput: e.target.value })}
                placeholder="Angular, Node.js, Express.js, MongoDB, TypeScript, Socket.IO"
                className="w-full px-4 py-2.5 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                // project_description *
              </label>
              <textarea
                rows={3}
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                placeholder="Describe architecture, scale, APIs, and impact..."
                className="w-full p-4 rounded-xl text-xs font-mono bg-[#FAF7F2] text-[#231915] border border-[#E2D7C9] focus:border-[#5C4033] focus:outline-none resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#E2D7C9]">
              <button
                type="button"
                onClick={closeEditor}
                className="px-4 py-2.5 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-mono text-xs font-semibold cursor-pointer"
              >
                cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] font-mono text-xs font-semibold cursor-pointer disabled:opacity-50"
              >
                <Save size={13} />
                {saving
                  ? "saving_project..."
                  : editingId
                  ? "update_project()"
                  : "save_project()"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProjects.map((project) => {
          const isClient = project.category === "client";
          const id = project._id;
          return (
            <div
              key={id || project.title}
              className="rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] overflow-hidden flex flex-col shadow-2xs hover:border-[#B8A390] transition-all"
            >
              {/* Card Header */}
              <div className="px-4 py-3 bg-[#FAF7F2] border-b border-[#E2D7C9] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#F2ECE4] text-[#5C4033] font-bold">
                    #{project.order ?? "—"}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold",
                      isClient
                        ? "bg-[#231915] text-[#FAF7F2]"
                        : "bg-[#F2ECE4] text-[#5C4033] border border-[#E2D7C9]"
                    )}
                  >
                    {isClient ? <Briefcase size={10} /> : <Code2 size={10} />}
                    {isClient ? "Client" : "Personal"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => openEditModal(project)}
                    className="p-1.5 rounded-lg border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] hover:border-[#5C4033] cursor-pointer"
                    title="Edit project"
                  >
                    <Edit3 size={12} />
                  </button>
                  {confirmDeleteId === id ? (
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={async () => {
                          await onDeleteProject(id);
                          setConfirmDeleteId(null);
                        }}
                        className="px-2 py-1 rounded-md bg-[#B93829] text-[#FFFFFF] font-mono text-[10px] font-semibold cursor-pointer"
                      >
                        confirm
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(null)}
                        className="px-2 py-1 rounded-md border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] font-mono text-[10px] cursor-pointer"
                      >
                        no
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmDeleteId(id)}
                      className="p-1.5 rounded-lg border border-[#E2D7C9] bg-[#FFFFFF] text-[#B93829] hover:bg-[#B93829] hover:text-[#FFFFFF] cursor-pointer transition-colors"
                      title="Delete project"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Thumbnail */}
              <div className="h-36 bg-[#F2ECE4] overflow-hidden relative border-b border-[#E2D7C9]/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/F2ECE4/231915?text=${encodeURIComponent(
                      project.title
                    )}`;
                  }}
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#231915]">{project.title}</h3>
                <p className="text-xs text-[#5A4D44] mt-1.5 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                  {(project.tech || []).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C9] text-[#231915]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 border-t border-[#E2D7C9] flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] hover:border-[#5C4033] font-mono text-[11px] font-semibold flex items-center justify-center gap-1.5"
                    >
                      <Github size={12} /> source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-xl bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] font-mono text-[11px] font-semibold flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={12} /> demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
