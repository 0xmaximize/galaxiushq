'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { Card, CardBody, CardFooter, Button, Chip, Divider, Spinner, Select, SelectItem, Avatar } from '@nextui-org/react'
import { AiFillSetting, AiOutlineSwap } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Hero() {

  return(
  <section className={`${styles.paddings}`}>
    <div className={`${styles.yPaddings}`}>
      <div className='justify-center items-center md:max-w-[720px]'>
        <div className='flex justify-center items center'>
          <Link href='/quest'>
          <Chip
          endContent={<BsFillArrowRightCircleFill size={18} />}
          variant="flat"
          color="primary"
          className='hover:shadow-md shadow-md hover:text-green-500 shadow-green-600 hover:shadow-green-500'
          >
            Genesis Quest now is available
        </Chip>
        </Link>
        </div>
        <div className='text-center justify-center leading-[40px] md:leading-[74px] items-center'>
        
        <h2 className='text-[32px] px-4 md:text-[64px] mt-6 font-extrabold'>
        Integrated Web3.0 Space by community.
        </h2>
          <h2 className='md:text-[18px] text-white/50 text-[16px] px-4 my-6 md:my-0 font-normal'>
          web3.0 access | autonomous-organization | community-based        
          </h2>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <Link href='/swap'>
            <Button size='lg' style={{borderRadius:'40px'}} className='neon text-[20px] w-[260px] bg-transparent'>Get Started</Button>
          </Link>
          </div>
     </div>
    </div>
    </section>
);
}

export default Hero;
