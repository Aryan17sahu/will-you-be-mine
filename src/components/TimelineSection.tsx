import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "When We Met",
    title: "The Beginning",
    description: "Remember when we first met in Bangalore..",
    image: "/timeline/placeholder.jpg",
  },
  {
    date: "First Date",
    title: "Our First Adventure",
    description: "When we went to Gokarna...",
    image: "/timeline/image1.png",
  },
  {
    date: "Special Moment",
    title: "When I Knew",
    description: "When i realised you are the one❤️...",
    image: "/timeline/image2.png",
  },
  {
    date: "Our Journey",
    title: "Growing Together",
    description: "You teaching me about mountains...",
    image: "/timeline/image3.png",
  },
  {
    date: "Today",
    title: "Writing Our Story",
    description: "When we met after Long time in Delhi...",
    image: "/timeline/image4.png",
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
        
         {item.image && (
  <img
  src={item.image}
  alt={item.title}
  className="w-full h-auto max-h-80 object-contain rounded-xl mb-4 bg-muted"
/>
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
