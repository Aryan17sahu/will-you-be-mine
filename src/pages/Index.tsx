import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import QuestionSection from "@/components/QuestionSection";
import CelebrationSection from "@/components/CelebrationSection";

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  if (showCelebration) {
    return <CelebrationSection />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <QuestionSection onYesClick={handleYesClick} />
    </div>
  );
};

export default Index;
