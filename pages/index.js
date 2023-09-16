'use client';
import { useEffect, useState } from 'react';
import { NavbarQuest, Footer } from '../components'
import { Spinner} from "@nextui-org/react";
import { Hero } from '../sections';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => 
    clearTimeout(loadingTimeout);
  },[]
);

    return (
    <div className="home overflow-hidden" aria-label='swap'>
      <>
      {isLoading ? (
        <div className='h-screen w-full flex items-center justify-center '>
          <Spinner size='lg' label='loading...' />
        </div>
      ) : (
      <>
      <NavbarQuest />
      <div className='relative'>
        <Hero />
      </div>
      <Footer />
      </>
      )}
      </>
    </div>
  );
}

export default Home;