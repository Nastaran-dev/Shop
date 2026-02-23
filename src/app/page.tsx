
import HeroSection from './Section1/Section1'
import NewArrivals from './section2/section2'
import FabrixHero from './section3/section3'
import{ CarouselPlugin} from './section4/section4'
import{ CuratedStories} from './section5/section5'
import  {SponsoredBanner} from './section6/section6'
import { SaleBanner } from './section7/section7'
import { DiscoverMore } from './section8/section8'
import { NewsletterSection } from './section9/section9'
export default function Page() {
  return (
    <div className='px-4 md:px-16'>
      <HeroSection/>
     < NewArrivals/>
     <FabrixHero/>
     <CarouselPlugin/>
     <CuratedStories/>
      <SponsoredBanner/>
       <SaleBanner/>
       <DiscoverMore/>
       <NewsletterSection/>
    </div>
  )
}
