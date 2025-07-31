'use client'

import LandingBackAnimation from '@/Animations/LandingBackAnimation'
import FirstSection from '@/Components/Dashboard/FirstSection'
import SecondSection from '@/Components/Dashboard/SecondSection'
import LandingMainNavbar from '@/Components/Landing/LandingMainNavbar'
import { useState, useEffect } from 'react'

const page = () => {
  const [step, setStep] = useState<number>(1)

  useEffect(() => {
    setStep(2)
  }, [])

  return (
    <div className="relative min-h-screen scrollbar-hidden w-full bg-[#020202f0] overflow-y-auto">
      <LandingBackAnimation />

      <div className="absolute z-10 flex flex-col min-h-screen">
        {/* Sticky works here */}
        <LandingMainNavbar isDashboard={true} />

        <div className="pt-20 px-10 pb-10">
          {
            step === 1 ? <FirstSection /> : step === 2 ? <SecondSection /> : <>Not Added !!</>
          }
        </div>
      </div>
    </div>
  )
}

export default page
