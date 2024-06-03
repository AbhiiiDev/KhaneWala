import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
 <div className="relative">
{/* Hero Section */}
<div className="absolute inset-0 z-0">
  <HeroSection />
</div>

{/* Fixed Header with higher z-index */}
<div className="fixed top-1 left-1 right-1 z-20">
  <Header />
</div>

{/* Push content down by the height of the HeroSection */}

  <div className="absolute z-30 mt-[70vh] md:mt-[100vh] container mx-auto ">
    {children}
  </div>
</div>
  
  );
};

export default layout;
