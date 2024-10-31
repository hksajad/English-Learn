import Banner from '@/components/module/Banner/Banner'
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
    </div>
  )
}

export default HomePage