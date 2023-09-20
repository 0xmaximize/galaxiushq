'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { Button, Card } from '@nextui-org/react';
import { fadeIn, slideIn } from '../utils/motion';
import { RxCornerTopRight, RxCornerBottomRight } from 'react-icons/rx';
import { Counter } from '../components';

const Insight = () => {

    return(
    <section className={`${styles.padding}`}>
      <div className={`md:flex justify-around items-start px-4 mt-10 lg:mx-20`}>
        <div className='justify-start items-center max-w-[540px]'>
         <span className='text-white/50 font-semibold'>
          THE GALAXIUS INSIGHT
         </span>
        <h1 className='font-black text-5xl my-4'>
        Enter a new universe of connected services.
        </h1>
         <h4 className='my-4'>
          Galaxius the porwered blockchain ecosystem on-chain and operable with oracle network.
         </h4>
        </div>
            <div className='flex justify-around'>      
              <div className=''>
              <motion.div                
              initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 0.4, 0.4)}
                className='text-center p-4'
                >
                <span className='font-mono text-6xl'> <Counter value={450}/>+</span>
                <p className='font-mono text-[16px]  my-4'> Users on platform </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 0.4, 0.4)}
                className='text-center'
                >
                <span className='font-mono text-6xl'> <Counter value={58}/>+</span>
                <p className='font-mono text-[16px]  my-4'> Active Staking </p>
              </motion.div>
              </div>

              <div className='grid gap-20'>
                <RxCornerTopRight className='text-[42px] mt-[-3rem]' />
                <RxCornerBottomRight className='text-[42px] mt-[12rem]' />
                </div>
            </div>
          </div>

      
    </section>
  );
}

export default Insight;
