import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "ozzyozzofficial",
    role: "UNITED STATE",
    text: "The video exceeded my expectations! Im very happy with how it turned out!I will definitely be ordering more in the future!!",
    rating: 5,
  },
  {
    name: "ROXYWOLFREACTS",
    role: "UNITED STATES",
    text: "He did really well. Getting a hold of him can be a pain sometimes, but he does a really good job editing the videos, which is why this deserves 5 stars.",
    rating: 5,
  },
  {
    name: "CEDRICKANAAN",
    role: "FRANCE",
    text: "Akindu is a very professional and polite gentleman. He is an active listener to requests and doesn't mind correcting the points you tell him to (no matter the number of times it takes).",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Client <span className="text-gradient">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
