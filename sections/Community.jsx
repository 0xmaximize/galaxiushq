'use client'
import styles from "../styles";
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaTelegramPlane, FaMedium } from 'react-icons/fa';

const communityLinks = [
    {
      title: "Community Chat",
      description:"Ask general question and chat with the worldwide community on Telegram.",
      to:"/",
      icon:"telegram"
      
    },
    {
        title: "Twitter",
        description:"Follow us @GalaxiusHQ on twitter to get the latest news & update.",
        to:"/",
        icon:"twitter"
        
      },
      {
        title: "Discord Server",
        description:"Ask general question and chat with the worldwide community on Telegram.",
        to:"/",
        icon:"discord"
        
      },
      {
        title: "Galaxius Blogs",
        description:"Ask general question and chat with the worldwide community on Telegram.",
        to:"/",
        icon:"medium"
        
      },
  ]

const icons = {
    discord: <BsDiscord className='text-white' size={32} />,
    twitter: <BsTwitter className='text-white' size={32} />,
    telegram: <FaTelegramPlane className='text-white' size={32} />,
    arrow : <MdOutlineArrowOutward className='text-white' size={18}/>,
    medium : <FaMedium className='text-white' size={32}/>
}

const Community = () => {
  return (
    <section className={`${styles.Upadding} md:px-10 md:mx-10`}>
      <div className={`${styles.xPadding} md:mt-10 mx-4 md:px-4`}>
        <div className="flex md:justify-center lg:justify-between items-center">    
            <div className="text-start">
              <span className='text-gray-600  md:text-[16px] font-black'>
                  COMMUNITY
              </span>
              <h1 className="font-black text-3xl md:text-5xl mt-2 md:mt-4 md:max-w-[560px]">
                Meet our community across the world and the universe.</h1>
              <p className={`${styles.textGray}  my-4 md:max-w-[560px]`}>
              a mining democratizes access concept & represent  range from mining equipment to mining pool shares.
              </p>         
            </div>

            <div className="grid justify-center items-center">
            {communityLinks.map((data, index) => (       
             <div key={index} className="flex justify-start items-start gap-6 py-8">
                <span className="items-start">                
                    {icons[data.icon]}
                </span>
                <div className="justify-center items-center grid gap-2 max-w-[420px]">
                    <div className="flex gap-1">  
                    <h4 className="flex items-center gap-1 text-xl font-bold"> {data.title}</h4>
                    <span className="mt-[-6px]"> {icons.arrow}</span>
                    </div>
                    <span className={`${styles.textGray} font-normal`}>{data.description}</span>
                </div>
             </div>
            ))}
          </div>
        </div>   
      </div>
    </section>
  );
};

export default Community;
