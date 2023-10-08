'use client'
import styles from "../styles";
import { PrismIcon, TagUser, Server, Circle } from '../components/Icon';

const mining = [
   
    {
      title: "Eco-friendly",
      description:"Renewable energy source by utilizing clean energy.",
      to:"/",
      icon:"circle"
      
    },
    {
      title:"Proof-of-Stake",
      description:
      "Provides the best performance with less energy enviroment.",
      to:"/",
      icon:"tag"
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
      icon:"server"
    },
   
  ]

  
  const icons = {
    prism: <PrismIcon className='text-white' size={22}/>,
    circle: <Circle className='text-white' size={22} />,
    tag: <TagUser className='text-white' size={22} />,
    server: <Server className='text-white' size={22} />,
}

const Token = () => {
  return (
    <section className={`${styles.Upadding} md:px-10 md:mx-10 z-10`}>
      <div className={`${styles.xPadding} md:mt-20 mx-4 md:px-4`}>
        <div className="flex md:justify-center lg:justify-between items-center">    
          <div className="text-start">
              <span className='text-gray-600  md:text-[16px] font-black'>
                 TOKENS
              </span>
              <h1 className="font-black text-3xl md:text-5xl mt-2 md:mt-4  max-w-[540px]">
              Utility Tokens : The next-gen of ERC20
              </h1>
              <p className={`${styles.textGray}  my-4 md:max-w-[560px]`}>
              a mining democratizes access concept & represent  range from mining equipment to mining pool shares.
              </p>         
              <div className='grid md:grid-cols-2 md:gap-10'>
                  {mining.map((data, index) => (
                      <div key={index} className='my-2 md:my-4'>
                          <div className='flex items-center gap-2 mt-4'>
                              <span className=''>{icons[data.icon]}</span>
                              <h1 className='font-bold text-[20px]'>{data.title}</h1>
                          </div>
                          <p className={`${styles.textGray} md:max-w-[280px] my-2`}>{data.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            <div>
          </div>
        </div>   
      </div>
    </section>
  );
};

export default Token;
