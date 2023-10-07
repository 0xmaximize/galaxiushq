'use client';
import { Navbar, Footer } from '../components'
import { Hero, Insight,  Mining, About, Brand, Step, Token, Community } from '../sections';
import { Divider } from '@nextui-org/react';

const Home = () => {
    return (
    <container>
        <Navbar />
        <div className='relative'>  
        <video src='./fluted-glass.webm' loop autoPlay muted className='md:flex z-0 absolute'/>
        <Hero />
      </div>
      <div className='relative z-10 particles-image'>
        <Insight /> 
        <Mining />
        </div>
        <div className='relative z-10 particles-image'>
     
        <Step />
        </div>
   
     
      <div style={{background:'#0a0a0a'}}>
      <Divider className=' bg-white/5 my-10'/>

    
      <div className='relative '>

        <Token />
      </div>
      <About />
      <Brand />
      <Community />
      <Footer />
      </div>
    </container>
  );
}

export default Home;
