import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";

const galleryPlaceholders = [
  { size: "large", label: "Our favorite memory" },
  { size: "small", label: "Sweet moment" },
  { size: "small", label: "Adventure together" },
  { size: "medium", label: "Date night" },
  { size: "medium", label: "Celebration" },
  { size: "small", label: "Everyday love" },
];

const GalleryItem = ({ 
  size, 
  label, 
  index 
}: { 
  size: string; 
  label: string; 
  index: number;
}) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1 aspect-square",
    medium: "col-span-1 md:col-span-1 row-span-1 aspect-square md:aspect-video",
    large: "col-span-2 row-span-2 aspect-square",
  };

  return (
    <motion.div
      className={`${sizeClasses[size as keyof typeof sizeClasses]} relative group`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-full h-full bg-card rounded-2xl border-2 border-dashed border-border flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl">
        <div className="text-center p-4">
          <Camera className="w-12 h-12 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-xs text-muted-foreground/60 mt-1">Click to add photo</p>
        </div>
      </div>
      
      {/* Decorative heart on hover */}
      <motion.div
        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ scale: 1.2 }}
      >
        <Heart className="w-6 h-6 text-primary fill-primary" />
      </motion.div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of our most precious moments together
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {galleryPlaceholders.map((item, index) => (
            <GalleryItem
              key={index}
              size={item.size}
              label={item.label}
              index={index}
            />
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          💕 Replace these placeholders with your favorite photos together
        </motion.p>
      </div>
    </section>
  );
};

export default GallerySection;
