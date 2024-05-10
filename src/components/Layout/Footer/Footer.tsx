import React from 'react'

import LastNews from './LastNews'
import Contact from './Contact'
import NewsLetter from './NewsLetter'
import AboutFooter from './AboutFooter'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <footer className='bg-blue-800 w-full mx-auto'>
      <div id='inner-footer' className='flex flex-col gap-3 md:flex-row md:max-w-7xl md:mx-auto md:gap-5 px-3 py-4 md:py-8 text-white'>
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