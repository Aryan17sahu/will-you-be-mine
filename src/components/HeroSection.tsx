import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FloatingHeart = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <motion.div
    className="absolute text-primary/30"
    style={{ left }}
    initial={{ y: "100vh", opacity: 0 }}
    animate={{ 
      y: "-100vh",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <Heart size={size} fill="currentColor" />
  </motion.div>
);

const HeroSection = () => {
  const hearts = [
    { delay: 0, left: "10%", size: 24 },
    { delay: 2, left: "20%", size: 16 },
    { delay: 1, left: "35%", size: 20 },
    { delay: 3, left: "50%", size: 28 },
    { delay: 1.5, left: "65%", size: 18 },
    { delay: 2.5, left: "80%", size: 22 },
    { delay: 0.5, left: "90%", size: 16 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-light/30 via-background to-background">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart, i) => (
          <FloatingHeart key={i} {...heart} />
        ))}
      </div>

      {/* Decorative sparkles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-gold rounded-full animate-sparkle" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-gold rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto text-primary fill-primary animate-pulse-soft" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our Love Story
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          A journey of two hearts becoming one
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-rose-dark transition-colors shadow-lg hover:shadow-xl"
          >
            Begin Our Story
            <Heart className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
