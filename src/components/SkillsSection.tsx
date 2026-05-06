import { motion } from "framer-motion";

const skills = [
  { name: "Adobe Photoshop", level: 95, color: "from-[hsl(200,100%,45%)] to-[hsl(220,100%,55%)]" },
  { name: "Adobe Illustrator", level: 90, color: "from-[hsl(30,100%,50%)] to-[hsl(15,100%,45%)]" },
  { name: "Canva", level: 92, color: "from-[hsl(190,100%,50%)] to-[hsl(270,80%,60%)]" },
  { name: "CapCut", level: 85, color: "from-[hsl(270,80%,60%)] to-[hsl(320,80%,55%)]" },
  { name: "Social Media Management", level: 88, color: "from-[hsl(190,100%,50%)] to-[hsl(160,80%,45%)]" },
  { name: "Marketing Video Creation", level: 82, color: "from-[hsl(320,80%,55%)] to-[hsl(350,80%,50%)]" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/3 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">My Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tools & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
