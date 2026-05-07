import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "2+" },
  { icon: Award, label: "Projects Completed", value: "10+" },
  { icon: Users, label: "Happy Clients", value: "9+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-80 h-96 mx-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-primary opacity-30 blur-lg" />
              <img
                src={profileImg}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Designing <span className="text-gradient">with purpose</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Graphic Designer with over 2 years of experience creating compelling visual solutions for brands across multiple industries. My work spans from social media content and product packaging to full brand identities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've had the privilege of designing real-world products currently available in the market, and I specialize in blending creativity with strategic marketing to produce designs that not only look stunning but also deliver measurable results.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
