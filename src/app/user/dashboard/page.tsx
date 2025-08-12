'use client'

import LandingBackAnimation from '@/Animations/LandingBackAnimation'
import FirstSection from '@/Components/Dashboard/FirstSection'
import FourthSection from '@/Components/Dashboard/FourthSection'
import LandingSection from '@/Components/Dashboard/LandingSection'
import SecondSection from '@/Components/Dashboard/SecondSection'
import ThirdSection from '@/Components/Dashboard/ThirdSection'
import LandingMainNavbar from '@/Components/Landing/LandingMainNavbar'
import { useState } from 'react'

const page = () => {
  const [step, setStep] = useState<number>(0);

  // useEffect(() => {
  //   setStep(1)
  // }, [])

  return (
    <div className="relative min-h-screen scrollbar-hidden w-full bg-[#020202f0] overflow-y-auto">
      <LandingBackAnimation />

      <div className="absolute z-10 flex flex-col min-h-screen">
        {/* Sticky works  here */}
        <LandingMainNavbar isDashboard={true} setStep={setStep} />

        <div className={` px-10 pb-10 w-screen ${step === 0 || step === 4? 'pt-5' : 'pt-20'}`}>
          {step === 0 ? <LandingSection /> : step === 1 ? <FirstSection /> : step === 2 ? <SecondSection /> : step === 3 ? <ThirdSection /> : step === 4 ? <FourthSection /> : <>Not Added !!</>
          }
        </div>
      </div>
    </div>
  )
}

export default page
