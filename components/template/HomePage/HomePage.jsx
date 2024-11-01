import Banner from '@/components/module/Banner/Banner'
import Blog from '@/components/module/Blog/Blog'
import Contact from '@/components/module/Contact/Contact'
import Planing from '@/components/module/Planing/Planing'
import Testimonials from '@/components/module/Testimonials/Testimonials'
import Works from '@/components/module/Works/Works'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <Planing/>
        <Works/>
        <Testimonials/>
        <Contact/>
        <Blog/>
    </div>
  )
}

export default HomePage