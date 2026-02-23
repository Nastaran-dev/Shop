import React from 'react'
import HeroSection from './Section1/Section1'
import NewArrivals from './section2/section2'
import FabrixHero from './section3/section3'
import{ CarouselPlugin} from './section4/section4'
import{ CuratedStories} from './section5/section5'
export default function page() {
  return (
    <div className='px-4 md:px-16'>
      <HeroSection/>
     < NewArrivals/>
     <FabrixHero/>
     <CarouselPlugin/>
     <CuratedStories/>
    </div>
  )
}
