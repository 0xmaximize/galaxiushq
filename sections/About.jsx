import { EncryptLinks } from "../constants";
import styles from "../styles";
import EncryptCard from "../components/EncryptCard";
import { PrismIcon, Circle, ScanIcon } from '../components/Icon';
import { motion } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { fadeIn } from "../utils/motion";

const icons = {
  prism: <PrismIcon className='' size={22} />,
  circle: <Circle className='text-white' size={22} />,
  scan: <ScanIcon className='text-white' size={22} />,
  arrow: <MdOutlineArrowOutward className='' size={22} />
}

const CardA = [
  {
    header : 'MINING',
    title : 'Start mining on Galaxius',
    description : 'Start a mining scales apps to meet user friendly UI & decentralized  scales apps to meet user friendly UI',
    icon: 'circle'
  } 
]

const CardB = [
  {
    header : 'TOKEN',
    title : 'GTX - Utility Token',
    description : 'Start a mining scales apps to meet user friendly UI & decentralized  scales apps to meet user friendly UI',
    icon: 'scan'
  } 
]


const CardC = [
  {
    header : 'SOULBOUND ',
    title : 'GTX Soulbound NFT',
    description : 'Start a mining scales apps to meet user friendly UI & decentralized  scales apps to meet user friendly UI',
    icon: 'circle'

  } 
]

const CardD = [
  {
    header : 'PRODUCT',
    title : 'Launch RTX-01 Edition',
    description : 'Start a mining scales apps to meet user friendly UI & decentralized  scales apps to meet user friendly UI',
    icon: 'prism'

  } 
]

const CardE = [
  {
    header : 'BETA',
    title : 'Galaxius BETA Launch',
    description : 'Start a mining scales apps to meet user friendly UI & decentralized  scales apps to meet user friendly UI',
    icon: 'prism'

  } 
]

const CardF = [
  {
    header : 'GALAVERSE',
    title : 'Farm with Galaxius',
    description : 'Start a mining scales apps to meet user friendly UI & decentralized  scales apps to meet user friendly UI',
    icon: 'prism'

  } 
]

const About = () => {
  return (
    <section className={`${styles.padding}`}>
      <div className={`${styles.xPadding}`}>
        <div className="flex md:justify-center lg:justify-center items-center px-4 md:px-0">
          <div className="text-center">
            <span className='text-gray-500 font-semibold'>
              PORTAL EXPEDITION
            </span>
            <h1 className="font-black my-4 text-3xl md:text-5xl">
              Explore a blockchain worlds       
            </h1>
            <p className={styles.textGray}> Try the Galaxius features to get a new experience in your blockhain </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 mt-10 md:justify-center lg:justify-start lg:items-start">
            
              {CardA.map((data, index) => (
                <motion.div  
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 0.2, 0.5)}
                className="md:w-[340px] lg:w-[400px] justify-center items-center" key={index}>
                  <EncryptCard 
                  header={data.header} 
                  title={data.title} 
                  text={data.description} 
                  icon={icons[data.icon]}
                  />
                </motion.div >
                ))}

              {CardB.map((data, index) => (
                <motion.div  
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 0.4, 0.5)}
                className="md:w-[340px] lg:w-[400px] justify-center items-center" key={index}>
                  <EncryptCard 
                  header={data.header} 
                  title={data.title} 
                  text={data.description} 
                  icon={icons[data.icon]}
                  />
                </motion.div >
              ))}

              {CardC.map((data, index) => (
                <motion.div  
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 0.6, 0.5)}
                className="md:w-[340px] lg:w-[400px] justify-center items-center" key={index}>
                  <EncryptCard 
                  header={data.header} 
                  title={data.title} 
                  text={data.description} 
                  icon={icons[data.icon]}
                  />
                </motion.div >
              ))}

              {CardD.map((data, index) => (
                <motion.div  
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 0.8, 0.5)}
                className="md:w-[340px] lg:w-[400px] justify-center items-center" key={index}>
                  <EncryptCard 
                  header={data.header} 
                  title={data.title} 
                  text={data.description} 
                  icon={icons[data.icon]}
                  />
                </motion.div >
              ))}

              {CardE.map((data, index) => (
                <motion.div  
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 1, 0.5)}
                className="md:w-[340px] lg:w-[400px] justify-center items-center" key={index}>
                  <EncryptCard 
                  header={data.header} 
                  title={data.title} 
                  text={data.description} 
                  icon={icons[data.icon]}
                  />
                </motion.div >
              ))}

              {CardF.map((data, index) => (
                <motion.div  
                initial="hidden"
                whileInView="show"
                variants={fadeIn('up', 'tween', 1.2, 0.5)}
                className="md:w-[340px] lg:w-[400px] justify-center items-center" key={index}>
                  <EncryptCard 
                  header={data.header} 
                  title={data.title} 
                  text={data.description} 
                  icon={icons[data.icon]}
                  />
                </motion.div >
              ))}

            </div>
          </div>
        </div>   
      </div>
    </section>
  );
};

export default About;
