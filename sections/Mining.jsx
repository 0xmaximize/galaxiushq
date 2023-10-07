'use client'
import styles from "../styles";
import { PrismIcon, ScanIcon, Circle } from '../components/Icon';

const mining = [
   
    {
      title: "Eco-friendly",
      description:"Renewable energy source by utilizing clean energy.",
      to:"/",
      icon:"prism"
      
    },
    {
      title:"Proof-of-Stake",
      description:
      "Provides the best performance with less energy enviroment.",
      to:"/",
      icon:"circle"
    },
    {
      title:"Asset Ownership",
      description:
      "Gain real ownership of mining assets, providing security and flexibility.",
      to:"/",
      icon:"prism"
    },
    {
      title: "Market Engagement",
      description:"Can be trade or use in galaxius protocols, enhancing miners' financial options.",
      to:"/",
      icon:"scan"
    },
   
  ]

  
const icons = {
    prism: <PrismIcon className='text-white' size={22}/>,
    circle: <Circle className='text-white' size={22} />,
    scan: <ScanIcon />
}

const Mining = () => {
  return (
    <section className='md:mt-20 md:py-20'>
    <div className={`${styles.xPadding}  mx-3 px-3`}>
      <div className="flex md:justify-center lg:justify-between items-center">
        <div>

        </div>
        <div className="text-start">
          <span className='text-gray-600  text-sm md:text-[16px] font-black'>
          MINING
          </span>
          <h1 className="font-black text-3xl md:text-5xl mt-2 md:mt-4  max-w-[540px]">
          NFT-Backed Mining: Revolution of mining
          </h1>
          <p className={`${styles.textGray}  my-4 md:max-w-[560px]`}>
          a mining democratizes access concept & represent  range from mining equipment to mining pool shares.
          </p>         
          <div className='grid md:grid-cols-2 md:gap-10'>
         {mining.map((data, index) => (
            <div key={index} className='my-4'>
            <div className='flex items-center gap-2 mt-4'>
                <span className=''>{icons[data.icon]}</span>
                <h1 className='font-bold text-[20px]'>{data.title}</h1>
            </div>
            <p className={`${styles.textGray} md:max-w-[280px] my-2`}>{data.description}</p>
            </div>
         ))}
         </div>
        </div>
      </div>   
    </div>
  </section>
  );
};

export default Mining;
