import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const FloatingHeart = ({ delay, size, left }: { delay: number; size: number; left: string }) => (
  <motion.div
    className="absolute text-primary"
    style={{ left }}
    initial={{ y: "100%", opacity: 0, scale: 0 }}
    animate={{ 
      y: [null, "-100vh"],
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0.5],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  >
    <Heart size={size} fill="currentColor" />
  </motion.div>
);

const CelebrationSection = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    delay: i * 0.3,
    size: Math.random() * 20 + 16,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-rose-light via-background to-rose-light overflow-hidden"
    >
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart, i) => (
          <FloatingHeart key={i} {...heart} />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-8 h-8 text-gold" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delay: 0.3 
        }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart className="w-24 h-24 mx-auto text-primary fill-primary mb-8" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6"
        >
          You Said Yes!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
        >
          You just made me the happiest person in the world! 
          <br />
          I can't wait to celebrate Valentine's Day with you! 💕
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-4"
        >
          <p className="text-2xl font-serif text-primary">
            I love you more than words can say
          </p>
          <p className="text-lg text-muted-foreground">
            Forever and always, yours truly 💝
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border shadow-md">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="text-foreground font-medium">Happy Valentine's Day!</span>
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CelebrationSection;
