import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Package } from "lucide-react";
import { Link } from "react-router-dom";
import projectProduct1 from "@/assets/pro01.jpeg";
import projectProduct2 from "@/assets/pro2.png";
import projectProduct3 from "@/assets/pro3.jpeg";
import projectProduct4 from "@/assets/pro4.jpeg";
import projectProduct5 from "@/assets/pro5.jpeg";
import projectProduct6 from "@/assets/pro6.jpeg";

const productDesignProjects = [
  {
    id: 1,
    title: "Hardware Items Packaging",
    description: "Premium product packaging design for Hardware line",
    image: projectProduct1,
    tags: ["Packaging", "Branding", "Product Design"]
  },
  {
    id: 2,
    title: "Hardware Items Packaging",
    description: "Product sticker design for a Hardware product",
    image: projectProduct2,
    tags: ["Stickers", "Product Design", "Branding"]
  },
  {
    id: 3,
    title: "Hardware Items Packaging",
    description: "Premium product packaging design for Hardware line",
    image: projectProduct3,
    tags: ["Packaging", "Branding", "Product Design"]
  },
  {
    id: 4,
    title: "Hardware Items Packaging",
    description: "Product sticker design for a Hardware product",
    image: projectProduct4,
    tags: ["Stickers", "Product Design", "Branding"]
  },
  {
    id: 5,
    title: "Hardware Items Packaging",
    description: "Premium product packaging design for Hardware line",
    image: projectProduct5,
    tags: ["Packaging", "Branding", "Product Design"]
  },
  {
    id: 6,
    title: "Hardware Items Packaging",
    description: "Product sticker design for a Hardware product",
    image: projectProduct6,
    tags: ["Stickers", "Product Design", "Branding"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ProductDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass border-b border-border/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="https://www.facebook.com/share/1GNEhQrhSP/?mibextid=wwXIfr"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Package size={20} className="text-primary" />
              <h1 className="font-display text-2xl font-bold">
                Product <span className="text-gradient">Design</span>
              </h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 text-center"
      >
        <div className="container mx-auto px-6">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Product Design Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Innovative <span className="text-gradient">Product Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our comprehensive product design portfolio featuring packaging, branding, and innovative product solutions.
          </p>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pb-24"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {productDesignProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full aspect-square object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay with external link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end"
                    >
                      <div className="p-6 text-white">
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <h3 className="font-display text-xl font-bold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-sm opacity-90">
                              {project.description}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                          >
                            <ExternalLink size={20} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductDesign;
