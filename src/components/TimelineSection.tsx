import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  imagePlaceholder?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    date: "When We Met",
    title: "The Beginning",
    description: "Add your story of how you first met...",
    imagePlaceholder: true,
  },
  {
    date: "First Date",
    title: "Our First Adventure",
    description: "Describe your first date together...",
    imagePlaceholder: true,
  },
  {
    date: "Special Moment",
    title: "When I Knew",
    description: "Share that special moment when you knew...",
    imagePlaceholder: true,
  },
  {
    date: "Our Journey",
    title: "Growing Together",
    description: "Talk about your journey together...",
    imagePlaceholder: true,
  },
  {
    date: "Today",
    title: "Writing Our Story",
    description: "And now, a very special question awaits...",
    imagePlaceholder: true,
  },
];

const TimelineCard = ({ item, index, isLeft }: { item: TimelineItem; index: number; isLeft: boolean }) => (
  <motion.div
    className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} mb-16 last:mb-0`}
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {/* Content */}
    <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block p-6 bg-card rounded-2xl shadow-lg border border-border/50 max-w-md ${
          isLeft ? "ml-auto" : "mr-auto"
        }`}
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          {item.date}
        </span>
        <h3 className="text-2xl font-serif font-semibold text-foreground mt-2 mb-3">
          {item.title}
        </h3>
        
        {item.imagePlaceholder && (
          <div className="w-full h-48 bg-muted rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-border group hover:border-primary/50 transition-colors cursor-pointer">
            <div className="text-center text-muted-foreground">
              <Camera className="w-10 h-10 mx-auto mb-2 group-hover:text-primary transition-colors" />
              <p className="text-sm">Add your photo here</p>
            </div>
          </div>
        )}
        
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>

    {/* Timeline dot */}
    <div className="relative flex-shrink-0">
      <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-rose-light" />
      <Heart className="absolute -top-1 -left-1 w-6 h-6 text-primary fill-primary animate-pulse-soft" />
    </div>

    {/* Spacer for alignment */}
    <div className="flex-1 hidden md:block" />
  </motion.div>
);

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-cream/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Journey Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment with you is a treasure. Here's our story...
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-rose-light to-primary hidden md:block" />
          
          {/* Mobile timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-rose-light to-primary md:hidden" />

          {/* Timeline items */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
