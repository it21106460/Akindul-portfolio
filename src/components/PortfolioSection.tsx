import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import projectSocial1 from "@/assets/project-social1.jpg";
import projectProduct1 from "@/assets/project-product1.jpg";
import projectBranding1 from "@/assets/project-branding1.jpg";
import projectProduct2 from "@/assets/project-product2.jpg";
import projectVideo1 from "@/assets/project-video1.jpg";

const categories = ["All", "Social Media", "Product Design", "Branding", "Video"];

const projects = [
  {
    title: "Os Tools Social Media Campaign",
    description: "Start social media design suite for a Hardware brand",
    category: "Social Media",
    image: projectSocial1,
  },
  {
    title: "Hardware Items Packaging",
    description: "Premium product packaging design for Hardware line",
    category: "Product Design",
    image: projectProduct1,
  },
  {
    title: "Brand Identity Collection",
    description: "Logo design and brand identity for multiple startups",
    category: "Branding",
    image: projectBranding1,
  },
  {
    title: "Product Stickering Project",
    description: " Product sticker design for a Hardware product",
    category: "Sticker Design",
    image: projectProduct2,
  },
  {
    title: "Marketing Video Production",
    description: "Promotional video editing and motion graphics for brands",
    category: "Video",
    image: projectVideo1,
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const getCategoryRoute = (category: string) => {
    switch (category) {
      case "Product Design":
        return "/product-design";
      case "Sticker Design":
        return "/sticker-design";
      case "Video":
        return "/video";
      case "Social Media":
        return "/social-media";
      default:
        return "/portfolio";
    }
  };

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat
                ? "bg-gradient-primary text-primary-foreground neon-glow-cyan"
                : "glass text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <Link
                key={project.title}
                to={getCategoryRoute(project.category)}
                className="block"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group glass rounded-2xl overflow-hidden cursor-pointer"
                >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <ExternalLink size={20} className="text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-display text-lg font-semibold mt-1 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
