'use client';
import { useEffect, useState } from 'react';
import { Navbar, Footer, Loader } from '../components'
import { Hero, Insight,  Mining, About, Brand, Step, Token, Community } from '../sections';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(loadingTimeout);} ,
    []);

    return (
    <div className="bg-black">
      <>
      {isLoading ? (
        <div className='h-screen w-full flex items-center justify-center'>
          <Loader />
        </div>
      ) : (
      <>
        <div className='relative'>
          <Navbar />
          <video src='./fluted-glass.webm' loop autoPlay muted className='md:block hidden z-0 absolute'/>
          <Hero />
        </div>
        <div className='relative z-10'>
        <Insight />
        </div>
        <div className='relative particles-image '>
          <Mining />
        </div>
        <Step />
        <div className='relative bc-image'>
        <Token />
        </div>
        <About />
        <Brand />
        <Community />
        <Footer />
      </>
      )}
      </>
    </div>
  );
}

export default Home;