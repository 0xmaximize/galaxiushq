'use client';
import { useEffect, useState } from 'react';
import { NavbarQuest } from '../components'
import {Link, Button, Spinner } from "@nextui-org/react";
import styles from '../styles';

const Underdevelopment = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 14000);

    return () => clearTimeout(loadingTimeout);
  }, []);

    return (
    <div className="swap overflow-hidden" aria-label='swap'>
      <NavbarQuest />
      <>
        {isLoading ? (
        <div className='h-screen w-full flex items-center justify-center '>
          <Spinner size='lg' label='loading...' />
        </div>
        ) : (
          <div className='h-screen w-full grid items-center justify-center '>
            <div className='grid justify-center items-center gap-10'>
            <h4>Failed to load the page, try again later...</h4>
            <Link href='/'><Button className='w-full'>Back to home</Button></Link>
            </div>
        </div>
        )}
      </>
    </div>
  );
}

export default Underdevelopment;