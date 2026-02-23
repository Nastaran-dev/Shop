"use client"
import React, { useEffect, useState } from 'react'
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
   interface Item {
  id: string
  img: string
  title: string
}
const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://69536ae3a319a928023b6064.mockapi.io/data")
      const json = await response.json()
      setData(json)
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <div className='px-4 md:px-16'>
      {data && data.map((item) => (
        <div key={item.id}>
         <img src={item.img} alt={item.title} />

        </div>
      ))}
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
