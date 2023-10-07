'use client';
import React from 'react';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { PrismIcon, ArrowTopRight } from '../components/Icon';

const Step = () => {
  return(
    <section className={`${styles.padding}`}>
      <div className='flex justify-center  mx-4'>
        <div className="grid md:grid-rows-4 md:last:grid-flow-col gap-6 ">
          <motion.div 
          whileHover={{scale:1.02}}
          initial="hidden"
          whileInView="show"
          variants={fadeIn('up', 'tween', 0.2, 0.5)}
          className={
            `${styles.hovered} md:row-span-4 md:w-[300px] lg:w-[400px] bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-500/10 via-sky-600/10 to-sky-800/5 from-10% via-25% to-65%`
            }
          >
            <span className='font-semibold  group-hover:text-white'>
              EXPLORE
            </span>
            <div className='grid mt-20 justify-end items-end'>
              <h4 className='text-2xl md:text-3xl my-10 row-span-1 lg:mt-20 font-bold'>
              Take part in a galaxius journey, more benefits and advantages               
              </h4>
              <PrismIcon className='text-white' size={22}/>
            </div>
          </motion.div>
          <motion.div 
          whileHover={{scale:1.02}}
          initial="hidden"
          whileInView="show"
          variants={fadeIn('up', 'tween', 0.4, 0.5)}
          className={
            `${styles.hovered} group md:row-span-2 md:col-span-2 md:w-[460px] lg:w-[600px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-500/10 via-sky-600/10 to-sky-800/5 from-10% via-25% to-65%`
            }
          >
            <div className='flex justify-between'>
              <h4 className='font-semibold'>PRESALE</h4>
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowTopRight size={16} />
              </span>
            </div>
            <h4 className='text-2xl md:text-3xl my-10 font-bold mt-10 flex gap-2 items-center'> Take part in a galaxius journey, more benefits and advantages.</h4>
            <p>GET WHITELIST </p>
          </motion.div>
          <motion.div 
          whileHover={{scale:1.02}}
          initial="hidden"
          whileInView="show"
          variants={fadeIn('up', 'tween', 0.6, 0.5)}
          className={
            `${styles.hovered} group md:row-span-2 py-4 px-4 rounded-2xl bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-sky-500/10 via-sky-600/5 to-sky-800/5`
            }
          >
            <div className='flex justify-between'>
              <h4 className='font-semibold'> SOULBOUND</h4>
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowTopRight size={14} />
             </span>
            </div>
            <h4 className='text-2xl font-bold mt-10 md:mt-36'> GALA-Proof SBT</h4>
          </motion.div>
          <motion.div 
          whileHover={{scale:1.02}}
          initial="hidden"
          whileInView="show"
          variants={fadeIn('up', 'tween', 0.8, 0.5)}
          className={
          `${styles.hovered} group md:row-span-2 py-4 px-4 rounded-2xl bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-sky-500/10 via-sky-600/10 to-sky-800/5`
            }
          >
            <div className='flex justify-between'>
              <h4 className='font-semibold'>
                EVENTS
              </h4>
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowTopRight size={14} />
              </span>
            </div>
            <h4 className='text-2xl font-bold mt-10 md:mt-36'>See all events</h4>
          </motion.div>        
        </div>
      </div>
    </section>
  );
}

export default Step;
