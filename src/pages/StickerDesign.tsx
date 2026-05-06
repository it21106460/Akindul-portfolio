import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import projectProduct2 from "@/assets/project-product2.jpg";

const stickerDesignProjects = [
  {
    id: 1,
    title: "Product Stickering Project",
    description: "Product sticker design for a Hardware product",
    image: projectProduct2,
    tags: ["Stickers", "Product Design", "Branding"],
    color: "bg-gradient-to-br from-pink-500 to-purple-600"
  },
  {
    id: 2,
    title: "Brand Sticker Collection",
    description: "Custom sticker designs for brand promotion",
    image: projectProduct2,
    tags: ["Stickers", "Branding", "Marketing"],
    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    title: "Laptop Sticker Series",
    description: "Creative laptop sticker designs for tech enthusiasts",
    image: projectProduct2,
    tags: ["Stickers", "Creative", "Tech"],
    color: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    id: 4,
    title: "Product Label Design",
    description: "Professional product labels and stickers",
    image: projectProduct2,
    tags: ["Labels", "Product Design", "Branding"],
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "Event Sticker Pack",
    description: "Custom stickers for corporate events and conferences",
    image: projectProduct2,
    tags: ["Events", "Stickers", "Marketing"],
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    id: 6,
    title: "Vinyl Sticker Collection",
    description: "Durable vinyl stickers for outdoor applications",
    image: projectProduct2,
    tags: ["Vinyl", "Outdoor", "Durability"],
    color: "bg-gradient-to-br from-yellow-500 to-orange-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const StickerDesign = () => {
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
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Palette size={20} className="text-primary" />
              <h1 className="font-display text-2xl font-bold">
                Sticker <span className="text-gradient">Design</span>
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
            Sticker Design Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Creative <span className="text-gradient">Sticker Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our vibrant sticker design collection featuring custom graphics, brand promotion materials, and creative label solutions.
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
              {stickerDesignProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateZ: 5 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateZ: 2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  className="group glass rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 ${project.color} opacity-20`}
                      animate={{
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full aspect-square object-cover relative z-10"
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Floating overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent flex items-end z-20"
                    >
                      <div className="p-6 text-white w-full">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="font-display text-xl font-bold mb-2"
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, x: -20 }}
                              whileHover={{ opacity: 0.9, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-sm opacity-90"
                            >
                              {project.description}
                            </motion.p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-4"
                          >
                            <ExternalLink size={20} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.1 + tagIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.h3 
                      className="font-display text-lg font-semibold text-foreground mb-2"
                      whileHover={{ color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
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

export default StickerDesign;
