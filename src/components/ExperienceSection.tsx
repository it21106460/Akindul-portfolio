import { motion } from "framer-motion";
import { TrendingUp, Eye, Target } from "lucide-react";

const experiences = [
  {
    year: "2025 - Present",
    role: "Junior Graphic Designer",
    company: " DLS Holdings Lanka (PVT) Ltd",
    description: "Leading brand design projects for major consumer products. Designed packaging for 5+ products currently on market shelves.",
    impact: "Increased brand engagement by 40%",
    icon: TrendingUp,
  },
  {
    year: "2024 - 2025",
    role: "Intern Graphic Designer",
    company: "RHD Color Lab & Studio",
    description: "Created social media content and marketing videos that drove significant audience growth across platforms.",
    impact: "Grew social following by 200%",
    icon: Eye,
  },

];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work <span className="text-gradient">Highlights</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-primary neon-glow-cyan hidden md:block" />

                <div className="glass rounded-2xl p-6">
                  <span className="text-xs text-primary font-medium">{exp.year}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-accent mt-0.5">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <exp.icon size={14} />
                    {exp.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
