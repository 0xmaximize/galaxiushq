'use client';
import { Navbar, Footer } from '../components'
import { Hero, Insight,  Mining, About, Brand, Step, Token, Community, Order} from '../sections';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
const Home = () => {
    return (
    <container>
     
        <motion.div   
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up', 'tween', 0.3, 0.5)}
        className='relative production'
        >
           <Navbar />
          <Hero />
        </motion.div>

      <Insight /> 
      <video src='./gitness.webm' loop autoPlay muted className='hidden md:flex z-0 absolute'/>

      <div className='relative'>
        <Step />
      </div>

      <About />
      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 'tween', 0.3, 0.5)}
      >
        <Token />
      </motion.div>

      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 'tween', 0.3, 0.5)}
      className='relative labs-image z-0'
      >
        <Mining />
      </motion.div>

      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 'tween', 0.3, 0.5)}
      >
       <Brand />
      </motion.div>

      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 'tween', 0.3, 0.5)}
      >
        <Order />
      </motion.div>

      <Community />
      <Footer />
    </container>
  );
}

export default Home;
