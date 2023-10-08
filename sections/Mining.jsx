'use client'
import styles from "../styles";
import { Cloud, Battery, Circle, Activity, Server, TagUser } from '../components/Icon';
 
const icons = {
    cloud: <Cloud className='text-white' size={22}/>,
    circle: <Circle className='text-white' size={22} />,
    battery: <Battery className='text-white' size={22} />,
}

const Mining = () => {
  return (
    <section className={`${styles.yPadding} md:mt-20 md:py-20 `}>
    <div className={`${styles.xPadding}  mx-3 px-3`}>
      <div className="flex md:justify-center lg:justify-between items-center">
        <div>
        </div>
        <div className="text-start">
          <span className='text-gray-600 text-sm md:text-[16px] font-black'>
            MINING
          </span>
          <h1 className="font-black text-3xl md:text-5xl mt-2 md:mt-4  max-w-[540px]">
            NFT-Backed Mining: Revolution of mining
          </h1>
          <p className={`${styles.textGray}  my-4 md:max-w-[480px]`}>
            a mining democratizes access concept & represent  range from mining equipment to mining pool shares.
          </p>         
          <div className='grid max-w-[500px]'>
            <div className="flex gap-2 justify-start items-center mt-4">
              <span>{icons.cloud}</span>
              <p className="font-bold text-[18px]">Proof-of-Stake (PoS)</p>
            </div>
            <p className={`${styles.textGray} my-2 `}> Implementation the Proof-of-Stake (PoS) system for defi applications and less energy than PoW system.</p>
          </div>
          <div className='grid max-w-[500px]'>
            <div className="flex gap-2 justify-start items-center mt-4">
              <span>{icons.battery}</span>
              <p className="font-bold text-[18px]">Less Energy</p>
            </div>
            <p className={`${styles.textGray} my-2 `}> Implementation the Proof-of-Stake (PoS) system for defi applications and less energy than PoW system.</p>
         </div>
         <div className='grid max-w-[500px]'>
            <div className="flex gap-2 justify-start items-center mt-4">
              <span>{icons.circle}</span>
              <p className="font-bold text-[18px]">Proof-of-Stake (PoS)</p>
            </div>
            <p className={`${styles.textGray} my-2 `}> Implementation the Proof-of-Stake (PoS) system for defi applications and less energy than PoW system.</p>
         </div>
        </div>
      </div>   
    </div>
  </section>
  );
};

export default Mining;
