import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaGithub,
  FaTag,
} from "react-icons/fa";
import {
  CheckCircle2,
  Clock,
  User,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Prynshumishra",
    label: "GitHub",
    accent: "from-zinc-600 to-zinc-800",
    hoverBorder: "hover:border-zinc-500/50",
    hoverShadow: "hover:shadow-zinc-500/10",
    chip: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/prynshumishr",
    label: "LinkedIn",
    accent: "from-blue-500 to-blue-700",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/10",
    chip: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/prynshu09",
    label: "Twitter",
    accent: "from-sky-400 to-sky-600",
    hoverBorder: "hover:border-sky-500/50",
    hoverShadow: "hover:shadow-sky-500/10",
    chip: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/Prynshumishr",
    label: "Instagram",
    accent: "from-pink-500 to-orange-400",
    hoverBorder: "hover:border-pink-500/50",
    hoverShadow: "hover:shadow-pink-500/10",
    chip: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  },
];

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "prynshu09@gmail.com",
    href: "mailto:prynshu09@gmail.com",
    accent: "from-blue-400 to-indigo-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/40",
    hoverShadow: "hover:shadow-blue-500/8",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 82995 25726",
    href: "tel:+918299525726",
    accent: "from-indigo-400 to-violet-500",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/40",
    hoverShadow: "hover:shadow-indigo-500/8",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Prayagraj, UP, India",
    href: null,
    accent: "from-sky-400 to-blue-500",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    hoverBorder: "hover:border-sky-500/40",
    hoverShadow: "hover:shadow-sky-500/8",
  },
];

const subjects = [
  "MERN Stack Development Project",
  "Backend / API Development",
  "Full-Time Job Opportunity",
  "Freelance or Contract Work",
  "Startup Collaboration",
  "Open Source Collaboration",
  "Technical Consultation",
  "General Inquiry",
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const MAX_MESSAGE = 500;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.name.trim() || data.name.trim().length < 2)
      e.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Please enter a valid email address.";
    if (!data.subject) e.subject = "Please select a subject.";
    if (!data.message.trim() || data.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    if (touched[e.target.name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e) => {
    const nowTouched = { ...touched, [e.target.name]: true };
    setTouched(nowTouched);
    setErrors(validate(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };

    setTouched(allTouched);

    // Validate form
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (isSubmitting) return; // prevent double submit

    setIsSubmitting(true);

    try {
  const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data;

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      // Success case
      if (response.ok && data?.success) {
        toast.success(
          "Message sent successfully! I'll reply within 24 hours. 🚀",
          {
            duration: 5000,
          },
        );

        setFormData(INITIAL_FORM);
        setTouched({});
        setErrors({});
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        toast.error(
          data?.error || "Message failed to deliver. Please try again.",
          { duration: 5000 },
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(
        "Network error. Please check your connection and try again.",
        {
          duration: 5000,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (name) =>
    cn(
      "w-full pl-10 pr-4 py-2.5 rounded-xl border bg-background/60 text-sm transition-all duration-200 focus:outline-none focus:ring-2",
      touched[name] && errors[name]
        ? "border-red-400/70 focus:ring-red-400/30 focus:border-red-400"
        : touched[name] && !errors[name]
          ? "border-emerald-400/70 focus:ring-emerald-400/30 focus:border-emerald-400"
          : "border-border/60 focus:ring-primary/40 focus:border-primary",
    );

  const charsLeft = MAX_MESSAGE - formData.message.length;

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* SaaS Deep Background Orbs */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Let&apos;s Talk
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, need a developer, or just want to chat?
            I&apos;m always open to new opportunities and interesting collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* ───── Left Panel ───── */}
          <div className="lg:col-span-2 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
            {/* Availability */}
            <div className="flex items-center justify-start gap-4 p-4 rounded-2xl bg-blue-500/10 border border-white/5 backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-blue-500/20 animate-pulse shrink-0">
                <Clock size={16} className="text-blue-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-400">
                  Usually responds within 24 hours
                </p>
                <p className="text-xs text-muted-foreground">
                  Mon – Sat · 9 AM – 9 PM IST
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, iconBg, iconColor, hoverBorder, hoverShadow }) => {
              const Wrapper = href ? "a" : "div";

              return (
                <Wrapper
                  key={label}
                  href={href || undefined}
                  className={cn(
                    "group flex items-center justify-start gap-4 p-5 bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl rounded-2xl transition-all duration-300",
                    hoverBorder,
                    hoverShadow,
                  )}
                >
                  <div className={cn("p-3 rounded-xl group-hover:scale-110 transition shrink-0", iconBg)}>
                    <Icon className={iconColor} size={16} />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-semibold group-hover:text-foreground transition">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social Links */}
            <div className="pt-2 text-center md:text-left">
              <p className="text-xs font-bold text-foreground text-center uppercase tracking-widest mb-4">
                Connect With Me
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {socialLinks.map(({ icon: Icon, href, label, accent, hoverBorder, hoverShadow, chip }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative flex items-center gap-2.5 px-5 py-3.5 bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl rounded-2xl",
                      "text-xs font-bold text-muted-foreground overflow-hidden",
                      "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:text-white",
                      hoverBorder,
                      hoverShadow,
                    )}
                  >
                    {/* Gradient fill on hover */}
                    <span
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        accent,
                      )}
                    />
                    {/* Icon with scale */}
                    <Icon
                      size={14}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-125"
                    />
                    <span className="relative z-10">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ───── Contact Form ───── */}
          <div className="lg:col-span-3 bg-card/40 backdrop-blur-2xl border border-white/5 shadow-2xl p-8 md:p-10 rounded-3xl">
            <div className="flex flex-col items-center justify-center mb-8">
              <h3 className="text-xl font-bold">Send a Message</h3>

              {isSuccess && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500 mt-2">
                  <CheckCircle2 size={14} /> Sent successfully!
                </span>
              )}
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs text-left font-semibold mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("name")}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-left font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      size={12}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("email")}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

            {/* Subject */}
              <div>
                <label className="block text-xs text-left font-semibold mb-1.5">
                  Subject *
                </label>
                <div className="relative">
                  <FaTag
                    size={12}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(fieldClass("subject"), "appearance-none pr-10")}
                  >
                    <option value="">Select Inquiry Type</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {touched.subject && errors.subject && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold">
                    Message *
                  </label>
                  <span
                    className={cn(
                      "text-[11px]",
                      charsLeft < 50
                        ? "text-amber-500"
                        : "text-muted-foreground/60",
                    )}
                  >
                    {charsLeft} / {MAX_MESSAGE}
                  </span>
                </div>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={MAX_MESSAGE}
                  className={cn(fieldClass("message"), "resize-none")}
                  placeholder="Hi Priyanshu, I'd like to discuss..."
                />
                {touched.message && errors.message && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300",
                  "hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-0.5",
                  "disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0",
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                I typically respond within{" "}
                <span className="font-semibold">24 hours</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
