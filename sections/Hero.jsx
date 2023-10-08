'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import EncryptButtons from '../components/EncryptButton';
import Typewriter from 'typewriter-effect';
import { fadeIn } from '../utils/motion';
import { HomeIcon, ScanIcon } from '../components/Icon';

const icons = {
  home:  <HomeIcon size={22}/>,
  scan:  <ScanIcon size={22}/>
};

const buttonText1 = () => "Launch Portal";
const buttonText2 = () => "Enter Galaverse";
const screenText1 = () => "Portal";
const screenText2 = () => "Explore";


function Hero() {
  return(
    <section className={`${styles.Hero} lg:px-20`}>
      <div className='flex justify-center items-center'>
        <div className={`${styles.yPadding} md:flex md:justify-around lg:justify-around md:items-start lg:flex-1`}>
          <div className='grid grid-cols-1'>
            <motion.span 
              initial="hidden"
              whileInView="show"
              variants={fadeIn('down', 'tween', 0.25, 0.5)}
              className="text-[32px] md:text-[42px] lg:text-[56px] text-start  
              font-extrabold md:font-black text-white">
                An blockchain portal 
            </motion.span>  
            <motion.p 
              initial="hidden"
              whileInView="show"
              variants={fadeIn('center', 'tween', 0.75, 0.5)}
              className='font-black text-[32px] md:text-[42px] lg:text-[54px] flex gap-2 md:gap-4'> with
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
                `${styles.textGray} hidden md:flex my-4 md:max-w-[300px] lg:max-w-[540px]`
                }
              >   
                Build and scale a modern blockchain and decentralized world based on user experience to a better level in the future.
            </motion.span>
            <div className='flex gap-4 my-10'>
              <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn('up', 'tween', 1.75, 0.5)}
              className='md:w-[200px] lg:w-[200px] hidden md:flex'>
                <EncryptButtons getTargetText={buttonText1} icons={icons.home}/>
              </motion.div>
              <motion.div 
               initial="hidden"
               whileInView="show"
               variants={fadeIn('up', 'tween', 2.25, 0.5)}
               className='md:w-[400px] lg:w-[300px] hidden md:flex '>
                <EncryptButtons getTargetText={buttonText2} icons={icons.scan} />
              </motion.div>
              
              <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn('up', 'tween', 1.25, 0.25)}
              className='flex w-[130px] md:hidden'>
                <EncryptButtons getTargetText={screenText1} icons={icons.home}/>
              </motion.div>
              <motion.div 
               initial="hidden"
               whileInView="show"
               variants={fadeIn('up', 'tween', 1.75, 0.25)}
               className='flex md:hidden'>
                <EncryptButtons getTargetText={screenText2} icons={icons.scan} />
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
