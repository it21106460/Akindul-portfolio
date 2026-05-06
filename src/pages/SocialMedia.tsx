import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Share2, Heart, MessageCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import projectSocial1 from "@/assets/project-social1.jpg";

const socialMediaProjects = [
  {
    id: 1,
    title: "Os Tools Social Media Campaign",
    description: "Start social media design suite for a Hardware brand",
    image: projectSocial1,
    tags: ["Social Media", "Campaign", "Branding"],
    platform: "Instagram",
    engagement: "12.5K",
    likes: "8.2K",
    comments: "456"
  },
  {
    id: 2,
    title: "Facebook Brand Awareness",
    description: "Comprehensive Facebook marketing campaign with visual content",
    image: projectSocial1,
    tags: ["Facebook", "Marketing", "Brand Awareness"],
    platform: "Facebook",
    engagement: "8.7K",
    likes: "5.3K",
    comments: "234"
  },
  {
    id: 3,
    title: "Twitter Engagement Strategy",
    description: "Twitter content strategy with engaging visuals",
    image: projectSocial1,
    tags: ["Twitter", "Strategy", "Content"],
    platform: "Twitter",
    engagement: "15.2K",
    likes: "9.8K",
    comments: "892"
  },
  {
    id: 4,
    title: "LinkedIn Professional Campaign",
    description: "B2B social media campaign for professional audience",
    image: projectSocial1,
    tags: ["LinkedIn", "B2B", "Professional"],
    platform: "LinkedIn",
    engagement: "6.4K",
    likes: "3.2K",
    comments: "178"
  },
  {
    id: 5,
    title: "TikTok Viral Content",
    description: "Short-form video content for TikTok platform",
    image: projectSocial1,
    tags: ["TikTok", "Short-form", "Viral"],
    platform: "TikTok",
    engagement: "45.8K",
    likes: "32.1K",
    comments: "2.3K"
  },
  {
    id: 6,
    title: "Pinterest Visual Strategy",
    description: "Visual content strategy for Pinterest marketing",
    image: projectSocial1,
    tags: ["Pinterest", "Visual", "Strategy"],
    platform: "Pinterest",
    engagement: "7.9K",
    likes: "4.6K",
    comments: "312"
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
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const SocialMedia = () => {
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
              <Share2 size={20} className="text-primary" />
              <h1 className="font-display text-2xl font-bold">
                Social <span className="text-gradient">Media</span>
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
            Social Media Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Engaging <span className="text-gradient">Social Content</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our dynamic social media campaigns across multiple platforms, creating compelling content that drives engagement and builds brand communities.
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
              {socialMediaProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50, rotateZ: -3 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50, rotateZ: 3 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.03,
                    rotateZ: 2,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
                  }}
                  className="group glass rounded-2xl overflow-hidden transition-all duration-400"
                >
                  {/* Social Media Post Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Platform Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="absolute top-3 left-3 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {project.platform}
                    </motion.div>
                    
                    {/* Engagement Stats Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent flex items-end"
                    >
                      <div className="p-6 text-white w-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex items-center gap-1"
                            >
                              <Heart size={16} />
                              <span className="text-sm">{project.likes}</span>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex items-center gap-1"
                            >
                              <MessageCircle size={16} />
                              <span className="text-sm">{project.comments}</span>
                            </motion.div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                          >
                            <ExternalLink size={18} />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} />
                          <span className="text-sm font-medium">{project.engagement} Engagement</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.1 + tagIndex * 0.08 + 0.6,
                            type: "spring",
                            stiffness: 250
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
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <Share2 size={16} />
                        <span>View Campaign</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.platform}
                      </span>
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

export default SocialMedia;
