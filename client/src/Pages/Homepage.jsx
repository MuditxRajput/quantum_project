import React from 'react';
import { useSelector } from 'react-redux';
import CountBanner from '../Components/CountBanner';
import Hero from '../Components/Hero';
import HomepageDropbox from '../Components/HomepageDropbox';
import HomepageSearch from '../Components/HomepageSearch';
import MobileMenu from '../Components/MobileMenu';
import PdfArea from '../Components/PdfArea';
const Homepage = () => {
  const isOpen = useSelector((state)=>state.user?.mobileMenu);
  return (
    <>
    {isOpen && <MobileMenu/>}
    <div >
      <Hero/>
    </div>
    <div>
      <CountBanner/>
    </div>
    <div className='mt-5'>
      <HomepageSearch/>
    </div>
    <div>
      <HomepageDropbox/>
    </div>
    <div>
      <PdfArea/>
    </div>
    
    </>
  )
}

export default Homepage