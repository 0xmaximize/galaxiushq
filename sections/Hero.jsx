'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import EncryptButtons from '../components/EncryptButton';
import Typewriter from 'typewriter-effect';
import { fadeIn } from '../utils/motion';
import { HomeIcon, ScanIcon, Scale } from '../components/Icon';

const icons = {
  home:  <HomeIcon size={22}/>,
  scan:  <ScanIcon size={22}/>,
  scale:  <Scale size={22}/>

};

const buttonText1 = () => "Launch Portal";
const buttonText2 = () => "View Docs";



function Hero() {
  return(
    <section className={`${styles.Hero} lg:px-20`}>
      
      <div className='flex justify-center items-center'>
        <div className={`${styles.yPadding} md:flex md:justify-around items-center lg:justify-around md:items-start lg:flex-1`}>
          <div className='grid grid-cols-1'>
            <motion.span 
              initial="hidden"
              whileInView="show"
              variants={fadeIn('up', 'tween', 0.25, 0.5)}
              className="text-[32px] md:text-[42px] lg:text-[56px] text-center md:text-start 
              font-extrabold md:font-black text-white">
                An blockchain portal 
            </motion.span>  
            <motion.p 
              initial="hidden"
              whileInView="show"
              variants={fadeIn('up', 'tween', 0.75, 0.5)}
              className='font-black text-[32px] justify-center md:justify-start  md:text-[42px] lg:text-[54px] flex gap-2 md:gap-4'> with
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-emerald-600">
              <Typewriter 
                options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings:
                [
                  "enviroment",
                  "eco-friendly",
                  "sustainable",
                  "valuable",
                ]
              }}
              />
            </span>
            </motion.p>
            <motion.span 
              initial="hidden"
              whileInView="show"
              variants={fadeIn('up', 'tween', 1.25, 0.5)}
              className={
                `${styles.textGray} text-[14px] md:text-[16px] text-center md:text-start px-8 md:px-0 md:flex my-4 md:max-w-[300px] lg:max-w-[540px]`
                }
              >   
                Build and scale a modern blockchain and decentralized world based on user experience to a better level in the future.
            </motion.span>
            <div className='flex gap-4 my-6'>
              <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn('up', 'tween', 1.75, 0.5)}
              className='hidden md:flex justify-center'>
                <EncryptButtons getTargetText={buttonText1} icons={icons.home}/>

              </motion.div>
              <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn('up', 'tween', 2.25, 0.5)}
              className='hidden md:flex justify-center'>
                <EncryptButtons getTargetText={buttonText2} icons={icons.scale}/>

              </motion.div>
            
            </div>
          </div>
          <div className='hidden md:flex w-[100px] lg:w-[500px] lg:h-[500px] '> 
          
          </div>
        </div>  
    
      </div>
    
    </section>
    );
}

export default Hero;
