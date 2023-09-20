'use client';
import { useEffect, useState } from 'react';
import { Navbar, Footer, Loader } from '../components'
import { Spinner} from "@nextui-org/react";
import { Hero, About, Insight, DaoComponent, Newsletter } from '../sections';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => 
    clearTimeout(loadingTimeout);
  },[]
);

    return (
    <div className="bg-black">
      <>
      {isLoading ? (
        <div className='h-screen w-full flex items-center justify-center '>
          <Loader />
        </div>
      ) : (
      <>
      <Navbar />
      <div className='relative'>
        <Hero />
        </div>
        <Insight />
        <About />
        <DaoComponent />
        <Newsletter />
      <Footer />
    
      </>
      )}
      </>
    </div>
  );
}

export default Home;