"use client";

import React from "react";
import LandingMain from "@/Components/LandingMainBanner";
import LandingMainNavbar from "@/Components/LandingMainNavbar";
import LandingFooter from "@/Components/LandingFooter";
import LandingBackAnimation from "@/Animations/LandingBackAnimation";

const LandingPage = () => (
  <div className="relative w-full bg-[#020202f0] flex flex-col">
    {/* Background Animated Shapes */}
    <LandingBackAnimation />

    {/* Main Foreground */}
    <div className="main relative z-10 flex flex-col h-full text-white">
      {/* Navbar */}
      <LandingMainNavbar />

      {/* Main */}
      <LandingMain />

      {/* Footer */}
      <LandingFooter />
    </div>
  </div>
);

export default LandingPage;
