'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import EncryptButtons from '../components/EncryptButton';
import Typewriter from 'typewriter-effect';
import Spline from '@splinetool/react-spline';
import { fadeIn } from '../utils/motion';
import { HomeIcon, ScanIcon } from '../components/Icon';
import { SiExpo } from 'react-icons/si'
const icons = {
  home:  <HomeIcon size={22}/>,
  scan:  <ScanIcon size={22}/>

};

const buttonText1 = () => "Launch Portal";
const buttonText2 = () => "Enter Galaverse";

function Hero() {

  return(
    <section className={`bg-gradient-to-t from-black to-white/5 `}>
      <div className={`justify-center items-center px-10 md:px-4 md:pt-12 lg:mx-16`}>
        <div className='md:flex md:my-10 py-10 md:justify-around md:items-start md:flex-1 '>
          <div className='grid grid-cols-1'>
            <span 
            className="text-[32px] md:text-[30px] lg:text-[52px] text-start  
            font-bold md:font-extrabold text-blue-50">
             An blockchain portal 
            </span>
            <span className="text-[28px] md:text-[30px] lg:text-[52px] text-start 
            font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-emerald-600">
              <Typewriter 
                options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings:
                [
                  "Exploring a universe",
                  "Find an experience ",
                  "The future of gaming",
                  "Enter the Galaverse",
                ]
              }}
              />
            </span>
              <motion.p className='text-[16px] my-4 md:max-w-[300px] lg:max-w-[600px] font-mono text-white/50'>
                Galaxius is an an operable blockchain providing the database, oracle network and Gaming-platform.
              </motion.p>
              <div className='flex gap-4  md:gap-4 my-10'>
              <div className='md:w-[200px] hidden md:flex'>
             <EncryptButtons getTargetText={buttonText1} icons={icons.home}/>
             </div>
             <div className='md:max-w-[300px] '>
             <EncryptButtons getTargetText={buttonText2} icons={icons.scan} />
             </div>
             </div>
          
          </div>
          <motion.div 
             className='hidden lg:flex w-[500px] h-[500px]'
             initial="hidden"
             whileInView="show"
             variants={fadeIn('center', 'tween', 0.5, 1)}
             > 
              <Spline scene="https://prod.spline.design/7E6tYNHzojhg7Ng6/scene.splinecode" />
            </motion.div>
        </div>  
      </div>
    </section>
  );
}

export default Hero;
