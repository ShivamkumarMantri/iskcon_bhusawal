import React from 'react'
import Carousel from "../components/Carousel"
import TempleIntro from "../components/TempleIntro"
import CTA from '../components/CTA'
import NewsLetter from '../components/NewsLetter'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'
import Founder from '../components/Founder'
function Home() {
  return (
    <div>
      <Carousel />
      <TempleIntro />
      <Founder />
      <FAQ />
      <CTA />
      {/* <Blog /> */}
      <NewsLetter />
    </div>
  )
}

export default Home