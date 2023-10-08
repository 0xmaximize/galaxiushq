'use client';
import { Navbar, Footer } from '../components'
import { Hero, Insight,  Mining, About, Brand, Step, Token, Community, Order} from '../sections';
import { Divider } from '@nextui-org/react';

const Home = () => {
    return (
    <container>
        <Navbar />
        <div className='relative'>  
        <video src='./fluted-glass.webm' loop autoPlay muted className='hidden  md:flex z-0 absolute'/>
        <Hero />
      </div>
        <Insight /> 
        <div className='relative z-10 labs-image'>
          <Mining />
        </div>
        <div className='relative'>
        <video src='./gitness.webm' loop autoPlay muted className='md:flex z-0 absolute'/>
        <Step />    
        </div>
        
        <Token />

      <About />
      <Brand />

      <Community />
      <div className='relative '>
      <Order />
      <video src='./gitness.webm' loop autoPlay muted className='md:flex z-0 '/>


      </div>

      <Footer />

    </container>
  );
}

export default Home;
