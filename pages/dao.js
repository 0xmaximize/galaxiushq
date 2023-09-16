'use client';
import { useEffect, useState } from 'react';
import { NavbarQuest } from '../components'
import {Spinner} from "@nextui-org/react";
import styles from '../styles';


const Dao = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

    return (
    <div className="swap overflow-hidden" aria-label='swap'>
        <NavbarQuest />
        <div className='h-screen w-full flex items-center justify-center '>
          <Spinner size='lg' label='loading...' />
        </div>
    </div>
  );
}

export default Dao;