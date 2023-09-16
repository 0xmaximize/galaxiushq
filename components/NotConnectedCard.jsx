'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { RandomIdenticon } from '../components'
import { BsTwitter, BsCheckCircleFill, BsDiscord, BsDot, BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidCopy } from 'react-icons/bi';
import { SiGitbook } from 'react-icons/si';
import { PiLockOpenFill, PiSignOutBold, PiGlobeBold  } from 'react-icons/pi';
import { TwitterLogoIcon } from '../components/Icon';
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Accordion,
  AccordionItem,
  Divider,
  Button,
  Spinner,
  Avatar,
  Input,
  Checkbox,
  Tooltip,
  CardFooter,
} from '@nextui-org/react';
import { nftDropAddress } from '../constants';
import {
  ConnectWallet,
  useAddress,
  useContract,
  useClaimedNFTSupply,  
  useDisconnect
} from "@thirdweb-dev/react";

export default function ConnectedCard() {
    const { contract } = useContract(nftDropAddress)
    const { data: claimedSupply } = useClaimedNFTSupply(contract);
  
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => 
      clearTimeout(loadingTimeout);
    },[]
  );
  

    return(
        <>
            <Card isHoverable className='py-2 px-2 rounded-2xl '>
                <CardHeader className='hidden md:block'>
                  <div className='grid grid-cols-1 w-full' >
                    <h1 className='lg:text-[36px] lg:text-start  text-[20px] font-semibold flex'>
                    Dappln Drop #1 - Genesis Edition 
                    </h1>
                    <div className='flex justify-between items-center mt-3'>
                      <div className='flex flex-col-1 gap-4 md:gap-8'>
                        <div className='flex gap-1 mx-2 justify-center items-center text-white/50 hover:text-white '>
                          <Avatar alt='' className='w-[28px] h-[28px] bg-gradient-to-l mx-[-10px] from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]' src="https://pbs.twimg.com/profile_images/1698987808730574848/u3ZS0KY0_400x400.jpg" />
                          <span className='font-normal pl-[14px] mr-[-16px] ml-[-5px] text-[13px] px-[10px] p-[1px] bg-black/5 hover:bg-white/5 rounded-full'>
                          {'  '} Dappln
                          </span>
                        </div>
                        <div className='flex justify-center items-center text-white/50 hover:text-white'>
                          <Avatar  
                          icon={<RandomIdenticon username='rewt23ar2' saturation="90"/>} 
                          
                          classNames={{base:'md:w-[28px] md:h-[28px] bg-gradient-to-l from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]'}} />
                          <Avatar icon={<RandomIdenticon username='textmw' saturation="90"/>} 
                          classNames={{
                              base:'w-[28px] h-[28px] bg-gradient-to-l mx-[-10px] from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]'}} />
                          <span className='text-[13px] px-[10px] p-[1px] bg-black/5 hover:bg-white/5 rounded-full'>
                          {claimedSupply?.toNumber()}  collected
                          </span>
                        </div>
                        <div className='flex gap-1  justify-center items-center text-white/50 hover:text-white '>
                          <Avatar alt='' className='w-[28px] h-[28px] bg-gradient-to-l mx-[-10px] from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]' src="https://s2.coinmarketcap.com/static/img/coins/200x200/11841.png" />
                          <p className='flex font-normal pl-[14px] ml-[-5px] text-[13px] px-[10px] p-[1px] bg-black/5 hover:bg-white/5 rounded-full'>
                          Arbitrum One
                          </p>
                        </div>
                      </div>
                      <div className='md:flex items-center hidden gap-4 text-white/50 '>
                        <Link href='https://dappln.xyz' target='_blank'>
                        <PiGlobeBold className='hover:text-white' />
                        </Link>
                        <Link href='https://discord.gg/nphAnE6gbd' target='_blank'>
                        <BsDiscord className='hover:text-white'/>
                        </Link>
                        <Link href='https://twitter.com/dappln' target='_blank'>
                        <BsTwitter className='hover:text-white'/>
                        </Link>
                        <Link href='https://dappln.gitbook.io/' target='_blank'>
                        <SiGitbook className='hover:text-white'/>
                        </Link>
                      </div>
                    </div>
                  </div>    
                </CardHeader>
                <Divider className="my-1 hidden md:block " />
                <CardBody>
                  <div  className='md:flex justify-between gap-8'>
                    <div className='md:max-w-[400px] hidden md:block'>
                      <p className='text-white/50'>
                      Welcome to Genesis Quest by <strong>dappln</strong>. Complete all missions to unlock this limited edition drop. By joining this event, you are accepted with events terms & condition.
                      </p>
                      <h1 className='lg:text-[20px] lg:text-start text-center text-[34px]  mt-4 font-semibold flex'>
                      How to get Genesis Pack?
                      </h1>
                      <p className='mt-2'>1. Go to quest page <span className='text-green-500 hover:text-green-400'>
                        <Link href='https://dappln.xyz/quest/'><strong>click here</strong></Link>
                        </span> </p>
                      <p>2. Enter quest  & connect your wallet</p>
                      <p>3. Complete all the missions</p>
                      <p>4. Claim your pack</p>
                    </div>
                    <div className='flex justify-center items-center'>
                      <img src='/pack-genesis.png' alt='' className='rounded-xl h-[250px] w-[250px] object-contain' />
                    </div>
                    <div className='md:hidden block mt-4'>
                    <div className='grid grid-cols-1 w-full' >
                    <h1 className='lg:text-[36px] lg:text-start  text-[20px] font-semibold flex'>
                    Dappln Drop #1 - Genesis Edition 
                    </h1>
                    <div className='flex justify-between items-center mt-3'>
                      <div className='flex flex-col-1 gap-4 md:gap-8'>
                        <div className='flex gap-1 mx-2 justify-center items-center text-white/50 hover:text-white '>
                          <Avatar alt='' className='w-[28px] h-[28px] bg-gradient-to-l mx-[-10px] from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]' src="https://pbs.twimg.com/profile_images/1698987808730574848/u3ZS0KY0_400x400.jpg" />
                          <span className='font-normal pl-[14px] mr-[-16px] ml-[-5px] text-[13px] px-[10px] p-[1px] bg-black/5 hover:bg-white/5 rounded-full'>
                          {'  '} Dappln
                          </span>
                        </div>
                        <div className='flex justify-center items-center text-white/50 hover:text-white'>
                          <Avatar  
                          icon={<RandomIdenticon username='rewt23ar2' saturation="90"/>} 
                          
                          classNames={{base:'w-[28px] h-[28px] bg-gradient-to-l from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]'}} />
                          <Avatar icon={<RandomIdenticon username='textmw' saturation="90"/>} 
                          classNames={{
                              base:'w-[28px] h-[28px] bg-gradient-to-l mx-[-10px] from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]'}} />
                          <span className='text-[13px] px-[10px] p-[1px] bg-black/5 hover:bg-white/5 rounded-full'>
                          {claimedSupply?.toNumber()} collected
                          </span>
                        </div>
                        <div className='flex gap-1  justify-center items-center text-white/50 hover:text-white '>
                          <Avatar alt='' className='w-[28px] h-[28px] bg-gradient-to-l mx-[-10px] from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]' src="https://s2.coinmarketcap.com/static/img/coins/200x200/11841.png" />
                          <p className='flex font-normal pl-[14px] ml-[-5px] text-[13px] px-[10px] p-[1px] bg-black/5 hover:bg-white/5 rounded-full'>
                          Arbitrum
                          </p>
                        </div>
                      </div>
                  
                    </div>
                  </div> 
                    <p className='text-white/50 mt-6'>
                      Welcome to Genesis Quest by <strong>dappln</strong>. Complete all missions to unlock this limited edition drop. By joining this event, you are accepted with events terms & condition.
                      </p>
                      <div className='flex items-center justify-end gap-4 text-white/50 mt-4 '>
                      <Link href='https://dappln.xyz' target='_blank'>
                        <PiGlobeBold className='hover:text-white' />
                        </Link>
                        <Link href='https://discord.gg/nphAnE6gbd' target='_blank'>
                        <BsDiscord className='hover:text-white'/>
                        </Link>
                        <Link href='https://twitter.com/dappln' target='_blank'>
                        <BsTwitter className='hover:text-white'/>
                        </Link>
                        <Link href='https://dappln.gitbook.io/' target='_blank'>
                        <SiGitbook className='hover:text-white'/>
                        </Link>
                      </div>
                   </div>
                  </div>

                  <div className='hidden md:flex lg:px-10 gap-4 mt-8'>
                  <CardBody className='bg-white/5 hover:bg-white/10 rounded-lg text-white/50 hover:text-white'>
                <div className='flex items-center justify-center'>
                   <p className='text-[12px]'>current status</p>
                </div>
                  <span className="text-center mt-1 text-2xl font-extrabold bg-gradient-to-r from-green-500 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-300% animate-gradient">
                  Active
                  </span>   
                </CardBody>
                <CardBody className='bg-white/5  hover:bg-white/10 rounded-lg text-white/50 hover:text-white'>
                <div className='flex items-center justify-center'>
                   <p className='text-[12px]'>available packs</p>
                </div>
                <span className="text-center mt-1 text-2xl font-extrabold bg-gradient-to-r from-green-500 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-300% animate-gradient">
                {claimedSupply?.toNumber()} /5000
                  </span>   
                    </CardBody>
                <CardBody className='bg-white/5  hover:bg-white/10 rounded-lg text-white/50 hover:text-white'>
                  <div className='flex items-center justify-center'>
                      <p className='text-[12px]'>network</p>
                  </div>
                  <span className="text-center mt-1 text-2xl font-extrabold bg-gradient-to-r from-green-500 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-300% animate-gradient">
                  Arbitrum
                  </span>   
                </CardBody>
                  </div>
                </CardBody>
                  <Divider className="my-[1px]" />
                    <CardFooter className='mt-2'>
                        <ConnectWallet btnTitle='Enter Quest' 
                        style={{
                          boxShadow:'0 0 5px #02eb4b',
                          background:'#02eb4b',
                          color:'#1b1b1c',
                          boxShadow:' 0 0 5px #02eb4b',
                          background:'#02eb4b',
                          fontWeight:'900',
                          width:'100%',
                          }}
                        />
                    </CardFooter>
                </Card>
                
                <Card isHoverable className='mt-4 md:mt-8 lg:mt-0'>
                <div className='absolute text-start justify-center items-center left-[9rem] top-[14rem]'>
                <PiLockOpenFill className='text-[60px] text-[#02eb4b]' />
                <Card>
                 </Card>
                
                </div>
                <p className='absolute text-center top-[18rem] left-[6.7rem] z-10'>Connect to unlock
                <br/>the missions </p>
                <CardBody className='gap-2'>
                        <h1 className=' text-center font-bold text-[26px]'> Mission #01</h1>
                    <Divider className='my-2'/>
                    <div className='font-bold mt-2'>
                      Connect a wallet
                    </div>
                    {isLoading ? ( 
                    <>
                      <div className='flex justify-start'>
                        <Spinner />
                      </div>
                    </>
                    ):(
                      <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-2'>
                        <Tooltip placement='left' delay={0} closeDelay={0}
                     content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">Connection Status</div>
                          <div className="text-tiny mt-1 max-w-[230px]">The connection status will be displayed when connected to dapps</div>
                        </div>
                      }
                        motionProps={{
                            variants: {
                            exit: { opacity: 0, transition: { duration: 0.1, ease: "easeIn" }},
                            enter: { opacity: 1, transition: { duration: 0.15, ease: "easeOut", }}
                            }
                        }}
                        >
                        <Button  variant='light' isIconOnly size='sm' className='mr-[-4px]'
                            startContent={<BsDot size={30} color='#f51000'/>} />
                        </Tooltip>
                          <p className='text-[14px] font-semibold text-white/50'>not connected</p>
                        </div>
                        <ConnectWallet btnTitle='Connect' 
                        style={{
                          padding:'10px',
                          minWidth:'80px', 
                          maxWidth:'80px',
                          color:'#1b1b1c',
                          boxShadow:' 0 0 5px #02eb4b',
                          background:'#02eb4b',
                          fontSize:'12px',
                          fontWeight:'900'
                        }}
                        />
                      </div>
                    )}
                    <div className='mt-2 blur-sm'>
                      <h4 className='font-bold'>Follow Twitter</h4>
                      <p className='text-[10px] mt-1 text-white/50'>example: @dappln</p>
                    </div>
                    <div  className='flex gap-4 blur-sm '>
                      <Input
                        type="text"
                        placeholder="Your username" 
                        variant="bordered"
                        color='success'
                        className="max-w-xs"
                        isDisabled
                      />
                      <Button isDisabled size='sm' className='my-[3px]' endContent={<TwitterLogoIcon />}
                      style={{
                        maxWidth:'83px',
                        minWidth:'83px',
                        boxShadow:' 0 0 5px #02eb4b',
                        background:'#02eb4b',
                        color:'#1b1b1c',
                        boxShadow:' 0 0 5px #02eb4b',
                        background:'#02eb4b',
                        fontSize:'12px',
                        fontWeight:'900'
                        }} 
                      >
                        Follow
                      </Button>
                    </div>
                    <div className='mt-2 blur-sm'>
                      <h4 className='font-bold'>Retweet a post</h4>
                      <p className='text-[10px] mt-1 text-white/50 font-extralight'>example: https://twitter.com/dappln/status/..</p>
                    </div>
                    <div  className='flex gap-4 blur-sm'>
                      <Input
                        isDisabled
                        type="text"
                        placeholder="Your retweet link" 
                        variant="bordered"
                        className="max-w-sm"
                        isClearable
                      />
                      <Button size='sm' 
                      isDisabled
                      className='my-[3px]' 
                      style={{
                        maxWidth:'80px',
                        minWidth:'80px',
                        boxShadow:' 0 0 5px #02eb4b',
                        background:'#02eb4b',
                        color:'#1b1b1c',
                        boxShadow:' 0 0 5px #02eb4b',
                        background:'#02eb4b',
                        fontSize:'12px',
                        fontWeight:'900'
                      }} 
                      endContent={<TwitterLogoIcon />}>
                        Tweet
                      </Button>
                    </div>
                    <div className='mt-2 blur-sm'>
                      <h4 className='font-bold'>Join Discord</h4>
                      <p className='text-[10px] mt-1 text-white/50'>example: dappln#1234</p>
                    </div>
                    <div className='flex gap-4 blur-sm'>
                      <Input
                        isDisabled
                        type="text"
                        placeholder="Your username / ID" 
                        variant="bordered"
                        className="max-w-sm"
                        isClearable
                      />
                      <Button 
                      isDisabled
                      size='sm'
                      style={{
                        maxWidth:'80px',
                        minWidth:'80px',
                        boxShadow:' 0 0 5px #02eb4b',
                        background:'#02eb4b',
                        color:'#000',
                        boxShadow:' 0 0 5px #02eb4b',
                        fontSize:'12px',
                        fontWeight:'900'
                      }}  
                      className='my-[3px]' 
                      endContent={<BsDiscord className='text-[14px] '/>}
                      variant=''
                      >
                        Join
                      </Button>
                    </div>
                    <div className='mt-4 flex gap-8 blur-sm'>
                    <Checkbox defaultSelected color='success' className='max-w-[320px]' size='sm'>
                      by continuing, you accept with the terms and conditions of this event.  
                    </Checkbox>
                    </div>
                    <div className='mt-4 blur-sm'>
                      <Button isDisabled style={{width:'100%', background:'#fff'}} />
                    </div>
                  </CardBody>
            </Card>
        </>
    )
}