"use client";

import LandingBackAnimation from "@/Animations/LandingBackAnimation";
import ProblemDetail from "@/Components/Dashboard/ProblemDetail";
import LandingMainNavbar from "@/Components/Landing/LandingMainNavbar";
import { useParams } from "next/navigation";
import { useState } from "react";


export default function ProblemPage() {
  const params = useParams();
  const problemId = params!.id as string; // [id] folder
  const [step, setStep] = useState(0);

  return (
    <div className="relative min-h-screen scrollbar-hidden w-full bg-[#020202f0] overflow-y-auto">
      <LandingBackAnimation />

      <div className="absolute z-10 flex flex-col min-h-screen">
        {/* Sticky navbar */}
        <LandingMainNavbar isDashboard={false} isProblemDetails={true} setStep={setStep} />

        <div className={`px-6 pb-10 w-screen ${step === 0 ? "pt-5" : "pt-20"}`}>
          <ProblemDetail problemId={problemId} />
        </div>
      </div>
    </div>
  );
}
