import { motion } from "framer-motion";
import { Palette, PenTool, Video, FileImage } from "lucide-react";

const services = [
  {
    icon: FileImage,
    title: "Social Media Design",
    description: "Scroll-stopping content for Instagram, Facebook, and TikTok that boosts engagement and brand awareness.",
  },
  {
    icon: PenTool,
    title: "Branding & Logo Design",
    description: "Complete brand identities from logo creation to brand guidelines that make your business unforgettable.",
  },
  {
    icon: Video,
    title: "Marketing Video Editing",
    description: "Professional video editing and motion graphics for promotional content, ads, and social media reels.",
  },
  {
    icon: Palette,
    title: "Content Creation",
    description: "End-to-end creative content from concept to execution, tailored to your marketing strategy and goals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-cyan/3 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:neon-glow-purple transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
