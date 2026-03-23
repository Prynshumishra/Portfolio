import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "MarTech Union",
    duration: "Aug 2025 – Feb 2026",
    location: "Remote",
    description: [
      "Collaborated with a team to deliver 3+ full-stack projects from Figma to production, including two MERN stack applications and one WordPress website, user-friendly interfaces with i18n support.",
      "Built full-stack features across frontend and backend, including a secure admin impersonation system for debugging and support.",
      "Improved application performance and SEO scores from below 50 to above 90 by applying optimization techniques such as image compression, asset minification, and efficient database handling.",
      "Built and customized WordPress websites/plugins using HTML, CSS, JavaScript, and MySQL, integrating CF7, Amelia, ChatBot, and GTM4WP for automation, scheduling, and analytics."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "CI/CD", "WordPress", "JavaScript", "MySQL", "CF7", "Amelia", "ChatBot", "GTM4WP"]
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Unifindss Innovations Pvt. Ltd.",
    duration: "May 2025 – July 2025",
    location: "Remote",
    description: [
      "Designed and developed high-performance, responsive user interfaces using React, Framer Motion, Tailwind CSS, and MongoDB.",
      "Built a full-stack counseling platform serving 100+ users, reducing load time by 25% through performance optimization.",
      "Developed responsive UI and scalable backend systems with secure authentication, payment integration, and analytics features.",
      "Resolved critical UI/UX issues and optimized API performance to enhance user experience."
    ],
    skills: ["React", "MongoDB", "Node.js", "Express.js", "TypeScript", "REST APIs", "JWT", "Tailwind CSS", "Framer Motion"]
  }
];

const ExperienceCard = ({ exp }) => {
  return (
    <div className="glass-card glass-card-hover p-6 md:p-8 relative group overflow-hidden w-full text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header: Date on left, Role on right (left-aligned text) */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div className="md:w-1/2 flex justify-start md:justify-end text-left">
          <h4 className="text-xl md:text-2xl font-bold text-amber-500 mb-1 md:w-full md:max-w-[250px] leading-snug">
            {exp.role}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-500 whitespace-nowrap shrink-0 mt-1">
          <Calendar size={13} />
          {exp.duration}
        </div>
        
        
      </div>

      {/* Company Details */}
      <div className="text-sm font-medium text-foreground/80 flex flex-col gap-1.5 mb-6 items-start">
         <div className="flex items-center gap-2">
            <span className="text-base">{exp.company}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
         </div>
         <span className="flex items-center gap-1 text-muted-foreground"><MapPin size={14}/> {exp.location}</span>
      </div>

      {/* Bullet points */}
      <ul className="space-y-3 mb-6">
        {exp.description.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed flex-row">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <span className="text-left text-[14px] flex-1">{point}</span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      {exp.skills && (
        <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50">
          {exp.skills.map((skill, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: `40px 40px`
        }} 
      />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto"
          >
            Exploring the path of growth and learning
          </motion.p>
        </div>

        {/* Work Experience Header centered on desktop, left on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-16 md:justify-center ml-2 md:ml-0"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.15)] shrink-0">
            <Briefcase className="text-amber-500 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">Work Experience</h3>
        </motion.div>

        {/* Alternating Timeline Layout */}
        <div className="relative mx-auto mt-12 pb-8">
          {/* Glowing central line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400 via-amber-500 to-transparent shadow-[0_0_10px_rgba(245,158,11,0.5)] md:-translate-x-1/2 z-0" 
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[28px] md:left-1/2 w-5 h-5 rounded-full bg-background border-4 border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)] z-10 transform -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2" />

                  {/* Desktop Left Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`hidden md:flex w-1/2 pr-12 justify-end ${!isLeft ? 'md:invisible' : ''}`}
                  >
                     <ExperienceCard exp={exp} />
                  </motion.div>

                  {/* Desktop Right Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`hidden md:flex w-1/2 pl-12 justify-start ${isLeft ? 'md:invisible' : ''}`}
                  >
                     <ExperienceCard exp={exp} />
                  </motion.div>

                  {/* Mobile Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:hidden w-full pl-16 pr-2 relative top-0"
                  >
                    <ExperienceCard exp={exp} />
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
