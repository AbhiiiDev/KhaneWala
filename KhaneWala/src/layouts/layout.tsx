import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Fixed Header with higher z-index */}
       
          <Header />
      

      {/* Push content down by the height of the HeroSection */}
      <div className="z-30 mt-[70vh] md:mt-[100vh] container mx-auto ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
