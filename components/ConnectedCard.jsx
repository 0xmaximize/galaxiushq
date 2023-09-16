'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { RandomIdenticon, ModalButton } from '../components'
import { BsTwitter, BsQuestionCircleFill, BsDiscord, BsDot, BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidCopy, BiCheckDouble } from 'react-icons/bi';
import { SiGitbook } from 'react-icons/si';
import { nftDropAddress } from '../constants';
import { PiSignOutBold, PiGlobeBold  } from 'react-icons/pi';
import { TwitterLogoIcon } from '../components/Icon';
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spinner,
  Avatar,
  Input,
  Checkbox,
  Tooltip,
  CardFooter,
  useDisclosure,
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import {
  useAddress,
  useContract,
  useClaimedNFTSupply,  
  useDisconnect
} from "@thirdweb-dev/react";

export default function ConnectedCard() {
    const { contract } = useContract(nftDropAddress)
    const { data: claimedSupply } = useClaimedNFTSupply(contract);
    const address = useAddress();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const disconnect = useDisconnect();
    const [twitterValue, setTwitterValue] = useState('');
    const [quoteValue, setQuoteValue] = useState('');
    const [discordValue, setDiscordValue] = useState('');

    const validateTwitter = (value) => {
        return value.match(/@[\w]{4,}/i);
    };

    const validationTwitter = useMemo(() => {
        if (twitterValue === "") return undefined;
        return validateTwitter(twitterValue) ? "valid" : "invalid";
    }, [twitterValue]);

    const validateDiscord = (value) => {
      const combinedPattern = /(\w+#\d{4}|\@\w{4,})/i;

      // Test if the input value matches the combined pattern
      return combinedPattern.test(value);
    };
    const validateQuote = (value) => {
      return value.match(/^[A-Za-z0-9]{2}$/);
  };

  const validationQuote = useMemo(() => {
      if (quoteValue === "") return undefined;
      return validateQuote(quoteValue) ? "valid" : "invalid";
  }, [quoteValue]);


    const validationDiscord = useMemo(() => {
      if (discordValue === "") return undefined;
  
      return validateDiscord(discordValue) ? "valid" : "invalid";
    }, [discordValue]);
  
    const isButtonDisabled = validationTwitter !== "valid" || validationDiscord !== "valid" ||  twitterValue === "" || discordValue === "";

    const abbreviateAddress = (address) => {
      if (address && address.length > 8) {
      return address.substring(0, 4) + '...' + address.substring(address.length - 4);
      }
      return address;
  };

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
        }, 5000);
        return () => 
        clearTimeout(loadingTimeout);
    },[]
    );

const [copyStatus, setCopyStatus] = useState('copy'); // 'copy' or 'copied'
const handleCopyClick = () => {
  const textarea = document.createElement('textarea');
  textarea.value = (`https://dappln.xyz/quest/?code=${address}`);
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  setCopyStatus('copied');

  // Reset copyStatus after a short delay (e.g., 2 seconds)
  setTimeout(() => {
    setCopyStatus('copy');
  }, 2000);
};


    return(
    <>
     <Card isHoverable className='py-2 px-2 rounded-2xl '>
        <CardHeader>
        <div className='md:hidden '>
            <h4 className='text-[20px] font-bold'>Welcome to Genesis Missions #1</h4>
       
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
          <div className='md:grid grid-cols-1 w-full hidden ' >
            <h1 className='lg:text-[36px] lg:text-start  text-[20px] font-semibold flex'>
              Welcome to Genesis Missions #1 
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
        <Divider className="my-1" />
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
            <div className='hidden md:flex justify-center items-center'>
              <img src='/pack-genesis.png' alt='' className='rounded-xl h-[250px] w-[250px] object-contain' />
            </div>
            <div className='md:hidden block'>
            <div className='grid items-center justify-center'>
            <img src='/pack-genesis.png' alt='' className='rounded-xl h-[250px] w-[250px] object-contain' />
        </div>
        
            <h1 className='lg:text-[20px] text-start text-[20px]  mt-4 font-semibold flex'>
              How to get Genesis Pack?
              </h1>
              <p className='mt-2'>1. Go to quest page <span className='text-green-500 hover:text-green-400'>
              <Link href='https://dappln.xyz/quest/'><strong>click here</strong></Link>
                </span> </p>
              <p>2. Enter quest  & connect your wallet</p>
              <p>3. Complete all the missions</p>
              <p>4. Claim your pack</p>
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
        {claimedSupply?.toNumber()}/5000
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
        <Divider className="my-1" />
        <CardFooter isHoverable className='flex justify-between '>
          <div className='flex gap-12'>
            <div className='flex justify-center items-center gap-2'>
              <Avatar alt='address' icon={<RandomIdenticon username={address} saturation="90"/>} classNames={{base:'w-[28px] h-[28px] bg-gradient-to-l from-[#1b1b1c] to-gray-600 border-[#1b1b1c] border-[2px]'}} />
              <div>
                <p className='text-[12px]'>Get your referral links : </p>
                  <div className='flex justify-center items-center gap-2'>  
                  <p className='hidden md:flex text-[10px]'>https://dappln.xyz/quest/?{address}</p>
                  <p className='flex md:hidden text-[10px]'>https://dappln.xyz/quest/?{abbreviateAddress(address)}</p>

                    {copyStatus === 'copy' ? (
                      <BiSolidCopy onClick={handleCopyClick} />
                    ) : (
                      <BiCheckDouble />
                    )}
                  </div>
                </div>
              </div>
          </div>
          <div className='justify-center items-center hidden md:block gap-2'>
          <div className='flex items-center mt-[-8px]'>
          <Tooltip placement='left' delay={0} closeDelay={0}
           content={
              <div className="px-1 py-2">
                <div className="text-small font-bold">Sybil Detector</div>
                <div className="text-tiny mt-1 max-w-[280px]"> Removing sybil address from this event, ensuring that only legitimate users can contribute.</div>
              </div>
            }
              motionProps={{
                  variants: {
                  exit: { opacity: 0, transition: { duration: 0.1, ease: "easeIn" }},
                  enter: { opacity: 1, transition: { duration: 0.15, ease: "easeOut", }}
                  }
              }}
              >
              <Button variant='light' isIconOnly size='sm' className='mr-[-4px]'
                  startContent={<BsInfoCircleFill size={10}/>} />
              </Tooltip>
            <p className='text-[10px]'>
              sybil detector
            </p>
            </div>      
            <p className='flex text-[10px] text-end'> 
              account status : {" "}
              {isLoading ? ( 
          <>
            <div className='flex justify-start'>
              <Spinner size='sm'/>
            </div>
          </>
          ):(
            <strong className='text-green-500'>
             safe
          </strong>
          )}  
            </p> 
                         
          </div>
        </CardFooter>
      </Card>
      <Card isHoverable className='mt-4 md:mt-8 lg:mt-0'>
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
                  startContent={<BsDot size={30} color='#02eb4b'/>} />
              </Tooltip>
                <p className='text-[14px] font-semibold'>Connected</p>
              </div>
            
            <div className='flex pl-2 justify-between items-center bg-black/10  rounded-full'>
             <p className='text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>{abbreviateAddress(address)}</p>
              <Button 
             variant='light' onPress={disconnect}  isIconOnly size='sm' endContent={<PiSignOutBold />}
             className='font-semibold text-emerald-400 ' 
             />
              </div>
            </div>
          )}
          <div className='mt-2'>
            <h4 className='font-bold '>Follow Twitter</h4>
            <p className='text-[10px] mt-1 text-white/50'>example: @dappln (use @)</p>
          </div>
          <div  className='flex gap-4'>
            <Input
              value={twitterValue}
              type="text"
              placeholder="Your username @..." 
              variant="bordered"
              color={validationTwitter === "invalid" ? "danger" : "success"}
              validationTwitter={validationTwitter}
              errorMessage={validationTwitter === "invalid" && "Invalid username"}
              onValueChange={setTwitterValue}
              className="max-w-xs"
              isClearable
            />
            <Link href='https://twitter.com/dappln' target='_blank'>
            <Button 
              size='sm' 
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
              className='my-[3px] hover:text-white' endContent={<TwitterLogoIcon />}>
                Follow
            </Button>
            </Link>
          </div>
          <div className='mt-2'>
            <div className='flex items-center'>
            <h4 className='font-bold'>Quote a tweet</h4>

            <Tooltip placement='left' delay={0} closeDelay={0}
           content={
              <div className="px-1 py-2">
                <div className="text-small font-bold">How to quote a tweet?</div>
                <div className="text-tiny mt-1 max-w-[230px]">
                  Click the <strong>Quote button</strong> below & find the retweet icon on post. or see this 
                  <Link href='https://www.lifewire.com/how-to-quote-a-tweet-on-twitter-4685775' target='_blank'> 
                  <span className='text-green-500'> articles</span>
                  </Link> 
                </div>
              </div>
            }
              motionProps={{
                  variants: {
                  exit: { opacity: 0, transition: { duration: 0.1, ease: "easeIn" }},
                  enter: { opacity: 1, transition: { duration: 0.15, ease: "easeOut", }}
                  }
              }}
              >
              <Button  variant='light' isIconOnly size='sm' className=']'
                  startContent={<BsQuestionCircleFill size={10} color='#fff'/>} />
              </Tooltip>
              
            </div>
            <p className='text-[10px] mt-1 text-white/50 font-extralight'>example: https://twitter.com/dappln/status/..</p>
          </div>
          <div className=' flex gap-4'>
            <Input
              type="text"
              variant="bordered"
              placeholder='Link to your post'
              className="max-w-xs"
              isClearable
            />
            <Link href='https://twitter.com/dappln/status/1701593893287190873' target='_blank'>
            <Button size='sm' 
            className='my-[3px]' 
            style={{
              maxWidth:'80px',
              minWidth:'80px',
              boxShadow:' 0 0 5px #02eb4b',
              background:'#02eb4b',
              color:'#1b1b1c',
              background:'#02eb4b',
              fontSize:'12px',
              fontWeight:'900'
            }} 
            endContent={<TwitterLogoIcon />}>
              Quote
            </Button>
            </Link>
          </div>
          <div className='mt-2'>
            <h4 className='font-bold'>Join Discord</h4>
            <p className='text-[10px] mt-1 text-white/50'>example: dappln#1234 / @dappln (use @)</p>
          </div>
          <div className='flex gap-4'>
          <Input
          value={discordValue}
          type="text"
          placeholder="Your username / ID"
          variant="bordered"
          color={validationDiscord === "invalid" ? "danger" : "success"}
          validationTwitter={validationDiscord}
          errorMessage={validationDiscord === "invalid" && "Invalid username"}
          onValueChange={setDiscordValue}
          className="max-w-xs"
          isClearable
        />
        <Link href='https://discord.gg/nphAnE6gbd' target='_blank'>
            <Button 
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
            </Link>
          </div>
          <div className='mt-4 flex gap-8'>
          <Checkbox defaultSelected color='success' className='max-w-[320px]' size='sm'>
            by continuing, you accept with the terms and conditions of this event.  
          </Checkbox>
          </div>
         
            <Button isDisabled={isButtonDisabled}
            className='mt-4 neon font-semibold'         
            size='md'
            variant='' 
            onPress={onOpen}>
              Claim rewards
            </Button>
              <Modal backdrop="blur" className='dark text-white' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="px-4 md:px-0 md:max-w-[400px]">
                    <ModalBody className="justify-center items-center">
                    <ModalButton />
                    </ModalBody>
                  </ModalContent>
                </Modal>
        </CardBody>
      </Card>
    </>
    )
} 
