import React from 'react'
import HeroSection from './Section1/Section1'
import NewArrivals from './section2/section2'
import FabrixHero from './section3/section3'
export default function page() {
  return (
    <div className='px-4 md:px-16'>
      <HeroSection/>
     < NewArrivals/>
     <FabrixHero/>
    </div>
  )
}
