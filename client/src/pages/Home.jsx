import React from "react";
import { Button } from "@/components/ui/button";
import Landing from "@/components/Home/Landing";
import Features from "@/components/Home/Features";
import AICalendarSection from "@/components/Home/AICalendarSection";
import EndSection from "@/components/Home/EndSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <AICalendarSection />
      <EndSection />
      <Footer />
    </>
  );
};

export default Home;
