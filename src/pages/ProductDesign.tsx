import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectProduct1 from "@/assets/pro01.jpeg";
import projectProduct2 from "@/assets/pro2.png";
import projectProduct3 from "@/assets/pro3.jpeg";
import projectProduct4 from "@/assets/pro4.jpeg";
import projectProduct5 from "@/assets/pro5.jpeg";
import projectProduct6 from "@/assets/pro6.jpeg";
import real1 from "@/assets/real1.jpeg";
import real2 from "@/assets/real2.jpeg";
import real3 from "@/assets/real3.jpeg";
import real4 from "@/assets/real4.jpeg";

const realProductImages = [
  real1,
  real2,
  real3,
  real4
];

const productDesignProjects = [
  {
    id: 1,
    title: "Air Bowler Packaging",
    description: "Premium product packaging design for Hardware line",
    image: projectProduct1,
    tags: ["Packaging", "Branding", "Product Design"],
    span: "col-span-2"
  },
  {
    id: 2,
    title: "Drill Packaging",
    description: "Product sticker design for a Hardware product",
    image: projectProduct2,
    tags: ["Stickers", "Product Design", "Branding"]
  },
  {
    id: 3,
    title: "Electric Hoist Packaging",
    description: "Premium product packaging design for Hardware line",
    image: projectProduct3,
    tags: ["Packaging", "Branding", "Product Design"],
    span: "col-span-2"
  },
  {
    id: 4,
    title: "Dry wall screw Packaging",
    description: "Product sticker design for a Hardware product",
    image: projectProduct4,
    tags: ["Stickers", "Product Design", "Branding"],
    span: "col-span-2"
  },
  {
    id: 5,
    title: "Gas Regulator Packaging",
    description: "Premium product packaging design for Hardware line",
    image: projectProduct5,
    tags: ["Packaging", "Branding", "Product Design"],
    span: "col-span-2"
  },
  {
    id: 6,
    title: "Vaccum Cleaner Packaging",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-slide functionality
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

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
                  className={`group glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${project.span || ''}`}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={800}
                      className={`w-full ${project.span ? 'aspect-video' : 'aspect-square'} object-cover`}
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

      {/* Real Product Images Slider Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pb-24"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Real <span className="text-gradient">Product Images</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our actual product photography showcasing the real-world application of our design work.
            </p>
          </motion.div>

          {/* Carousel */}
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex gap-4">
                {realProductImages.map((image, index) => (
                  <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass rounded-2xl overflow-hidden p-2"
                    >
                      <img
                        src={image}
                        alt={`Real Product ${index + 1}`}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {realProductImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    selectedIndex === index ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductDesign;
