import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Play, Video as VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import projectVideo1 from "@/assets/project-video1.jpg";

const videoProjects = [
  {
    id: 1,
    title: "Marketing Video Production",
    description: "Promotional video editing and motion graphics for brands",
    thumbnail: projectVideo1,
    tags: ["Marketing", "Motion Graphics", "Video Editing"],
    duration: "2:30",
    views: "12.5K"
  },
  {
    id: 2,
    title: "Product Launch Video",
    description: "Cinematic product launch video with 3D animations",
    thumbnail: projectVideo1,
    tags: ["Product Launch", "3D Animation", "Cinematic"],
    duration: "3:45",
    views: "8.2K"
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Short-form video content for social media platforms",
    thumbnail: projectVideo1,
    tags: ["Social Media", "Short-form", "Content"],
    duration: "0:30",
    views: "45.8K"
  },
  {
    id: 4,
    title: "Brand Story Video",
    description: "Corporate brand story with documentary style",
    thumbnail: projectVideo1,
    tags: ["Brand Story", "Documentary", "Corporate"],
    duration: "5:15",
    views: "6.7K"
  },
  {
    id: 5,
    title: "Event Coverage",
    description: "Professional event coverage and highlights",
    thumbnail: projectVideo1,
    tags: ["Event", "Coverage", "Highlights"],
    duration: "4:20",
    views: "9.3K"
  },
  {
    id: 6,
    title: "Tutorial Series",
    description: "Educational video series with animations",
    thumbnail: projectVideo1,
    tags: ["Educational", "Tutorial", "Animation"],
    duration: "1:45",
    views: "23.1K"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const Video = () => {
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
              <VideoIcon size={20} className="text-primary" />
              <h1 className="font-display text-2xl font-bold">
                Video <span className="text-gradient">Gallery</span>
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
            Video Production Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Captivating <span className="text-gradient">Video Content</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our dynamic video production portfolio featuring marketing content, animations, and compelling visual storytelling.
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
              {videoProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -50 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                  }}
                  className="group glass rounded-2xl overflow-hidden transition-all duration-400"
                >
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Play Button Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Play size={28} className="text-primary-foreground ml-1" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Duration Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded"
                    >
                      {project.duration}
                    </motion.div>
                    
                    {/* Views Counter */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1"
                    >
                      <VideoIcon size={12} />
                      {project.views}
                    </motion.div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: index * 0.1 + tagIndex * 0.1 + 0.7,
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "hsl(var(--primary))",
                            color: "hsl(var(--primary-foreground))"
                          }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium cursor-pointer transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.h3 
                      className="font-display text-lg font-semibold text-foreground mb-2"
                      whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary text-sm font-medium cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      <span>Watch Video</span>
                    </motion.div>
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

export default Video;
