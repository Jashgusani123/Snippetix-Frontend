'use client'

import LandingBackAnimation from '@/Animations/LandingBackAnimation'
import LandingMainNavbar from '@/Components/Landing/LandingMainNavbar'
import FirstSection from '@/Components/Dashboard/FirstSection'

const page = () => {
  return (
    <div className="relative min-h-screen scrollbar-hidden w-full bg-[#020202f0] overflow-y-auto">
      <LandingBackAnimation />

      <div className="absolute z-10 flex flex-col min-h-screen">
        {/* Sticky works here */}
        <LandingMainNavbar isDashboard={true} />

        <div className="pt-20 px-10 pb-10">
          <FirstSection />
        </div>
      </div>
    </div>
  )
}

export default page
