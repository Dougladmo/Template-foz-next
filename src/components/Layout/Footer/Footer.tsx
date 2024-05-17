import React from 'react'

import LastNews from './LastNews'
import Contact from './Contact'
import NewsLetter from './NewsLetter'
import AboutFooter from './AboutFooter'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <footer className='bg-blue-800 w-full mx-auto'>
      <div id='inner-footer' className='flex flex-col lg:flex gap-3 lg:flex-row lg:justify-center lg:max-w-7xl mx-auto lg:gap-5 px-3 py-4 lg:py-8 text-white md:grid md:grid-cols-2 md:grid-rows-2 md:items-start md:justify-center md:gap-10 md:px-28 md:py-10 lg:px-5'>
          <AboutFooter />
          <LastNews />
          <Contact />
          <NewsLetter />
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer