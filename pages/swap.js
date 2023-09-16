'use client';
import { useEffect, useState } from 'react';
import { NavbarQuest } from '../components'
import {Skeleton, Card, CardBody, Spacer, Select, Button,CardFooter, Spinner, Input} from "@nextui-org/react";
import styles from '../styles';
import { SwapComponent } from '../sections';
import { MdSettings } from 'react-icons/md'

const Swap = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

    return (
    <div className="swap overflow-hidden" aria-label='swap'>
      <>
        <NavbarQuest />
        {isLoading ? (
        <div className='h-screen w-full flex items-center justify-center '>
          <Spinner size='lg' label='loading...' />
        </div>
        ) : (
        <div className='relative'>
          <SwapComponent />
        </div>
        )}
      </>
    </div>
  );
}

export default Swap;