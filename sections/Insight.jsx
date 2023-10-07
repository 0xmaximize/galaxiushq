'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { RxCornerTopRight, RxCornerBottomRight } from 'react-icons/rx';
import { Counter } from '../components';
import EncryptButtons from '../components/EncryptButton';
import { HomeIcon } from '../components/Icon';


const buttonText1 = () => "Pre-register";
const icons = {
  home:  <HomeIcon size={22}/>,
};

const Insight = () => {

    return(
    <section className={`${styles.centered}`}> 
    <div className={`${styles.insightPadding} px-6 md:px-0 lg:px-20`}>
      <div className=' bg-gray-500/5 rounded-xl md:rounded-3xl'>
      <div className={`md:flex md:justify-between p-6 md:p-4 md:items-start px-4 mt-10 `}>
        <div className='justify-center items-center  md:px-10  md:my-10'>
          <span className='text-gray-600 md:text-[16px] text-sm font-semibold'>
            ENVIROMENT
          </span>
          <h1 className='font-black text-2xl lg:text-5xl my-4 '>
            A better earth with blockchain enviroment        
          </h1>
          <h4 className={`${styles.textGray} my-4 md:max-w-[400px]`}>
          Evolution of blockchain technology — a fusion of eco-friendliness, modernity, and inclusivity.  
          </h4>
          <div className='my-10'>
            <EncryptButtons getTargetText={buttonText1} icons={icons.home}/>
          </div>
        </div>
        <div className=' px-4'> 

        <div className='flex my-4 justify-end items-start'>
            <div className='py-10 md:py-10 md:px-8 justify-end'>
            <p className='font-normal flex text-3xl lg:text-6xl text-end'> 
              <Counter value={9999}/>+</p>                
              <p className='text-end mt-4 text-gray-500'>BETA registered</p>  
            </div>
              <RxCornerTopRight className='text-[28px] md:text-[40px]' />
          </div>
          
          <div className='flex my-4 justify-end items-end '>
            <div className='py-0 mb-10 md:mb-0 md:py-10 md:px-8'>
              <p className='font-normal flex text-3xl lg:text-6xl text-end'> 
              <Counter value={532}/>+</p>  
              <p className='text-end mt-4 text-gray-500'>Latest interaction</p>  
            </div>
            <RxCornerBottomRight className='text-[28px] md:text-[40px]' />
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Insight;
