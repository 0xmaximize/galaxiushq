'use client';
import React, { useEffect, useState, useMemo} from "react";
import {
  Button, 
  DropdownItem,
  DropdownTrigger, 
  Dropdown, 
  DropdownMenu, 
  Spinner, 
  useDisclosure,
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody,
  Avatar,
  Card,
  ModalFooter,
  CardBody
} from "@nextui-org/react";

import {ChevronDown, Data, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icon.jsx";
import Link from "next/link";
import { BsThreeDots } from 'react-icons/bs';
import { PiCardsFill, PiSignOutBold } from 'react-icons/pi';
import { TbDiamondFilled } from 'react-icons/tb';
import { BiSolidCopy, BiLogoBitcoin } from 'react-icons/bi';
import { abbreviateAddress } from "./CustomTexts.jsx";
import { ConnectWallet, useAddress, useDisconnect, useBalance } from "@thirdweb-dev/react";
import { useRouter } from 'next/router';
import { RandomIdenticon } from "./RandomIdenticon.js";
import { tradeLinks, daoLinks, earnLinks } from "../constants/index.js";
import { MdOutlineSwapCalls, MdOutlineHowToVote } from 'react-icons/md';
import { PiDatabase, PiFileImageFill } from 'react-icons/pi';
import { HiOutlineDocumentText, HiOutlineMenu } from 'react-icons/hi';
import { RiHandCoinFill, RiCoinsFill,  } from 'react-icons/ri';

export default function NavbarQuest() {
  const router = useRouter();
  const address = useAddress();
  const [activeLink, setActiveLink] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const disconnect = useDisconnect();
  
  // Simulate loading for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);


  const handleLinkClick = (link) => {
    setActiveLink(link);
    router.push(link); // This will navigate to the specified link
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <MdOutlineSwapCalls className="text-success" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    bitcoin: <BiLogoBitcoin className="text-warning" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    data: <PiDatabase className="text-success" fill="currentColor" size={30} />,
    vote: <MdOutlineHowToVote className="text-success" fill="currentColor" size={30} />,
    stake: <RiHandCoinFill className="text-success" fill="currentColor" size={30} />,
    stakenft: <RiCoinsFill className="text-success" fill="currentColor" size={30} />,
    document: <HiOutlineDocumentText className="text-success" fill="currentColor" size={30} />,
    nfticon:<PiFileImageFill className="text-success" fill="currentColor" size={30} />,

  };
  return (
    <section className='w-full bg-black/20 backdrop-blur overflow-hidden  border-y border-white/5'>
      <div className="flex justify-between mx-4 md:mx-6 lg:mx-10 py-3">
        <div className="flex justify-between md:gap-4 lg:gap-14">
        
          <div className="flex gap-1">
            <HiOutlineMenu className="text-[30px] md:hidden flex my-1"/>
            <Link href='/' className="flex gap-1 ">
              <img src='/dappln.png' alt='' className="hidden md:flex md:w-[40px] rounded-full md:h-[40px] object-contain" />
            <h4 className="font-extrabold mt-[3px] hidden lg:flex text-[20px]">dappln</h4>
            </Link>
          </div>
          
          <ul className="hidden lg:gap-6 gap-4 md:flex items-center">
            <li>
            <Dropdown>
              <DropdownTrigger >
                <Button
                  disableRipple
                  className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                >
                <p className="text-bold text-[16px]">Exchange</p>
                </Button>
              </DropdownTrigger>    
              <DropdownMenu
                aria-label="Trade"
                className="w-[260px]"
                itemClasses={{
                  base: "gap-2 py-2",
                }}
              >
              {tradeLinks.map((data) => (
                <DropdownItem
                  key='Trade'
                  description={data.description}
                  onClick={() => handleLinkClick(data.to)}
                  startContent={icons[data.icon]}
                >
                    <span className='text-[13px] mb-9 font-bold'>{data.title}</span>
                </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
            </li>
            <li className="mx-[px]">
            <Dropdown>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
            <p className="text-bold text-[16px]">Staking</p>
                  </Button>
                </DropdownTrigger>
              <DropdownMenu
                aria-label="Stake"
                className="w-[240px]"
                itemClasses={{
                  base: "gap-4 p-1",
                }}
              >
               {earnLinks.map((data) => (
                <DropdownItem
                  className='py-2'
                  key='Stake'
                  description={data.description}
                  onClick={() => handleLinkClick(data.to)}
                  startContent={icons[data.icon]}
                >
                    <span className='text-[13px] mb-9 font-bold'>{data.title}</span>
                </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>   
            </li> 

            <Link href='/quest' target="_blank"> 
            <li className="text-bold text-[16px] ml-[px]">Quest 
            <span className="absolute top-[14px] px-1 rounded-sm bg-red-500 text-[6px] p-[1px]">new</span>
            </li>
            </Link>

            <li className="">
            <Dropdown>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
            <p className="text-bold text-[16px]">DAO</p>
                  </Button>
                </DropdownTrigger>
              <DropdownMenu
                aria-label="DAO"
                className="w-[240px]"
                itemClasses={{
                  base: "gap-4 p-1",
                }}
              >
               {daoLinks.map((data) => (
                <DropdownItem
                  className='py-2'
                  key='DAO'
                  description={data.description}
                  onClick={() => handleLinkClick(data.to)}
                  startContent={icons[data.icon]}
                >
                    <span className='text-[13px] mb-9 font-bold'>{data.title}</span>
                </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>   
            </li>
        
          
             
           <li  className="text-bold text-[16px] text-white/80 hover:text-white hidden lg:flex "><BsThreeDots /></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {address ? (
          <>
          <Button auto onPress={onOpen} className="neon">
            <span className="flex gap-2 text-[#000] items-center font-semibold">
              <Avatar  
              icon={<RandomIdenticon username={address} saturation="90"/>} 
              classNames={{
                base:'w-[20px] h-[20px] bg-gradient-to-tr from-gray-400 to-white/80'
              }} 
              />
              {abbreviateAddress(address)} 
              <Avatar  
              icon={icons.chevron}
              classNames={{
                base:'w-[20px] h-[20px] bg-transparent text-black'
              }} 
              />
            </span>  
            <Modal 
            backdrop="blur" 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            className='dark text-white'
            >
              <ModalContent className="lg:max-w-[400px]">
                {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                  <ModalBody className="justify-center items-center">
                    <Avatar icon={<RandomIdenticon username={address} saturation="90" />} className='w-[80px] h-[80px]' />
                    <div className="text-center">
                    <h1 className=" lg:text-[18px] font-bold">              
                      {abbreviateAddress(address)}
                    </h1>
                  <div className="flex gap-6 mt-2 text-white/30">
                    <div className="flex gap-2 items-center hover:text-white">
                      <TbDiamondFilled size={20}  /> 0 DPT
                    </div>    
                    |              
                    <div className="flex gap-2 hover:text-white items-center">
                      <PiCardsFill size={20} /> 0 NFT Pass
                    </div>
                  </div>
                </div>
                </ModalBody>
                <ModalFooter className="flex justify-around items-center gap-4">
                <Card isPressable>
                    <CardBody className="justify-center hover:bg-white/5 min-w-[180px] text-white/50 hover:text-white items-center gap-1">
                    <BiSolidCopy size={20} />
                     <p className="text-[14px]">Copy address</p>
                    </CardBody>
                  </Card>
                  <Card isPressable onClick={disconnect}>
                    <CardBody className="justify-center hover:bg-white/5 min-w-[180px] text-white/50 hover:text-white items-center gap-1">
                    <PiSignOutBold size={20} />
                     <p className="text-[14px]">Disconnect</p>
                    </CardBody>
                  </Card>
                </ModalFooter>
                </>
              )}
              </ModalContent>
            </Modal>
          </Button>
          </>
          ) : (
            <div className="neon">
              <ConnectWallet
              theme="dark"
              btnTitle="Connect"
              style={{
                background:'transparent',
                padding:'6px',
                border:'none',
                marginLeft:'-20px',
                marginRight:'-20px',
                color:'#000',
                fontSize:'16px',
                fontWeight:'500'
              }}
            />
            </div>
          )}
        </>
        )}
        </div>
      </div>
    </section>
  );
}
