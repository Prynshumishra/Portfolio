import { useState } from "react";
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
import { CheckCircle2, Clock, User, Send, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Prynshumishra", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/prynshumishr", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/prynshu09", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/Prynshumishr", label: "Instagram" },
];

const contactInfo = [
  { icon: FaEnvelope, label: "email", value: "prynshu09@gmail.com", href: "mailto:prynshu09@gmail.com" },
  { icon: FaPhone, label: "phone", value: "+91 82995 25726", href: "tel:+918299525726" },
  { icon: FaMapMarkerAlt, label: "location", value: "Prayagraj, UP, India", href: null },
];

const subjects = [
  "Full Stack Development Project",
  "Backend / API Development",
  "Full-Time Job Opportunity",
  "Freelance or Contract Work",
  "Startup Collaboration",
  "Open Source Collaboration",
  "Technical Consultation",
  "General Inquiry",
];

const INITIAL = { name: "", email: "", subject: "", message: "" };
const MAX_MSG = 500;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (d) => {
    const e = {};
    if (!d.name.trim() || d.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Please enter a valid email address.";
    if (!d.subject) e.subject = "Please select a subject.";
    if (!d.message.trim() || d.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (touched[e.target.name]) setErrors(validate(updated));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0 || isSubmitting) return;
    setIsSubmitting(true);
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data = {};
      try {
        data = await res.json();
      } catch {
        // Ignore non-JSON response body
      }
      if (res.ok && data?.success) {
        toast.success("Message sent! I'll reply within 24h.", { duration: 5000 });
        setForm(INITIAL);
        setTouched({});
        setErrors({});
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error(data?.error || "Message failed. Please try again.", { duration: 5000 });
      }
    } catch {
      toast.error("Network error. Check your connection.", { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all duration-200 focus:outline-none font-mono bg-[#FAF7F2] text-[#231915] placeholder:text-[#5A4D44]/60";
  const inputBorder = (name) =>
    touched[name] && errors[name]
      ? "border border-[#B93829]"
      : touched[name] && !errors[name]
      ? "border border-[#5C4033]"
      : "border border-[#E2D7C9]";

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="container w-full mx-auto relative z-10">
        <SectionHeader
          index="06"
          label="get_in_touch"
          title="Let's"
          accent="Connect"
          description="Have a project or opportunity? I'm always open to interesting collaborations and new challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] shadow-2xs"
            >
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9]">
                <Clock size={15} className="text-[#5C4033]" />
              </div>
              <div className="text-left">
                <p className="font-mono text-xs font-semibold text-[#231915]">
                  // responds_within(24h)
                </p>
                <p className="text-xs mt-0.5 text-[#5A4D44]">Mon – Sat · 9 AM – 9 PM IST</p>
              </div>
            </motion.div>

            {/* Contact info */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => {
              const Wrapper = href ? "a" : "div";
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <Wrapper
                    href={href || undefined}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-[#E2D7C9] bg-[#FFFFFF] hover:border-[#B8A390] shadow-[0_8px_24px_-10px_rgba(35,25,21,0.06)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 bg-[#FAF7F2] border border-[#E2D7C9]">
                      <Icon size={13} className="text-[#5C4033]" />
                    </div>
                    <div className="text-left">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#5A4D44]">
                        {label}
                      </p>
                      <p className="text-sm font-semibold mt-0.5 text-[#231915]">{value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Socials */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-3 text-center text-[#5A4D44]">
                // social_links
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2D7C9] bg-[#FFFFFF] text-[#5A4D44] hover:text-[#FAF7F2] hover:bg-[#231915] hover:border-[#231915] font-mono text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon size={12} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative terminal-card p-8 md:p-10 text-left"
          >
            <SpotlightEffect />

            <div className="flex items-center gap-3 mb-7 pb-4 border-b border-[#E2D7C9]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-xs ml-2 text-[#5A4D44]">send_message.js</span>
              {isSuccess && (
                <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-[#16A34A] font-semibold">
                  <CheckCircle2 size={12} /> sent_successfully
                </span>
              )}
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                    // name *
                  </label>
                  <div className="relative">
                    <User
                      size={12}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#5A4D44]"
                    />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      className={cn(inputBase, inputBorder("name"))}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="font-mono text-[10px] mt-1 flex items-center gap-1 text-[#B93829]">
                      <AlertCircle size={10} /> {errors.name}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                    // email *
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      size={11}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#5A4D44]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      className={cn(inputBase, inputBorder("email"))}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="font-mono text-[10px] mt-1 flex items-center gap-1 text-[#B93829]">
                      <AlertCircle size={10} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold text-[#231915]">
                  // subject *
                </label>
                <div className="relative">
                  <FaTag
                    size={10}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10 text-[#5A4D44]"
                  />
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cn(inputBase, inputBorder("subject"), "appearance-none pr-10")}
                  >
                    <option value="">Select inquiry type</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#5A4D44]">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {touched.subject && errors.subject && (
                  <p className="font-mono text-[10px] mt-1 flex items-center gap-1 text-[#B93829]">
                    <AlertCircle size={10} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest font-semibold text-[#231915]">
                    // message *
                  </label>
                  <span
                    className={cn(
                      "font-mono text-[10px]",
                      MAX_MSG - form.message.length < 50 ? "text-[#B93829]" : "text-[#5A4D44]"
                    )}
                  >
                    {MAX_MSG - form.message.length}/{MAX_MSG}
                  </span>
                </div>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={MAX_MSG}
                  placeholder="Hi Priyanshu, I'd like to discuss..."
                  className={cn(inputBase, inputBorder("message"), "resize-none pl-4")}
                />
                {touched.message && errors.message && (
                  <p className="font-mono text-[10px] mt-1 flex items-center gap-1 text-[#B93829]">
                    <AlertCircle size={10} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-mono text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] shadow-[0_6px_20px_rgba(35,25,21,0.18)] hover:shadow-[0_8px_28px_rgba(92,64,51,0.28)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> sending_message...
                  </>
                ) : (
                  <>
                    <Send size={14} /> send_message()
                  </>
                )}
              </button>

              <p className="text-center font-mono text-[10px] text-[#5A4D44]">
                // typically_responds_within(24h)
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
