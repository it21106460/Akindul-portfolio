import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-neon-cyan/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            Creative <span className="text-gradient">Graphic Designer</span>
            <br />
            <span className="text-muted-foreground">&</span> Visual Storyteller
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Transforming ideas into compelling visual experiences. 3 years of crafting brands, designs, and marketing content that captivate audiences and drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90 transition-opacity neon-glow-cyan"
            >
              View My Work <ExternalLink size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass font-semibold text-foreground hover:bg-muted/30 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
