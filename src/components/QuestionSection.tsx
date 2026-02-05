import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface QuestionSectionProps {
  onYesClick: () => void;
}

const QuestionSection = ({ onYesClick }: QuestionSectionProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width / 2 - 60;
    const maxY = container.height / 2 - 30;
    
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoHoverCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    // Fire confetti!
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#fecdd3'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Heart burst from center
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
      shapes: ['circle'],
    });

    onYesClick();
  };

  const noButtonMessages = [
    "No 💔",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Please? 🥺",
    "Pretty please?",
    "I'll be sad...",
    "Catch me!",
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-rose-light/20 to-background min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8"
          >
            <Heart className="w-20 h-20 mx-auto text-primary fill-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Will You Be My Valentine?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every moment with you is magical. I can't imagine celebrating this day of love with anyone else...
          </p>

          <div className="relative h-32 flex items-center justify-center gap-8">
            {/* Yes Button */}
            <motion.button
              onClick={handleYesClick}
              className="px-12 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-xl shadow-lg hover:shadow-xl hover:bg-rose-dark transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes! 💕
            </motion.button>

            {/* No Button - runs away! */}
            <motion.button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-8 py-4 bg-muted text-muted-foreground rounded-full font-medium text-lg border border-border hover:border-primary/30 transition-colors"
            >
              {noButtonMessages[Math.min(noHoverCount, noButtonMessages.length - 1)]}
            </motion.button>
          </div>

          {noHoverCount > 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted-foreground mt-8"
            >
              Hint: That button is a bit shy... maybe try the other one? 😉
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuestionSection;
