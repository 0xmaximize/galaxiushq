'use client';
import React, {useState} from "react";
import { Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Data, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icon.jsx";
import Link from "next/link";
import styles from '../styles'; 
import { ConnectWallet } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import { tradeLinks, earnLinks, daoLinks } from "../constants/index.js";
export default function Navbars() {
  const router = useRouter();

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    router.push(link); // This will navigate to the specified link
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    data: <Data className="text-primary" fill="currentColor" size={30} />,

  };
  return (
    <section className='w-full bg-black/20 backdrop-blur overflow-hidden  border-y border-white/10'>
      <div className="flex justify-between mx-4 md:mx-6 lg:mx-10 py-3">
        <div className="flex justify-between md:gap-4 lg:gap-14">
        <Link href='/'>
          <div className="flex gap-1">
            <img src='/dappln.png' alt='' className="w-[40px] rounded-full h-[40px] object-contain" />
            <h4 className="font-extrabold mt-[3px] hidden lg:flex text-[20px]">dappln</h4>
            
          </div>
          </Link>
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
                <p className="text-bold text-[16px]">Trade</p>
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
            <Link href='/quest' target="_blank"> 
            <li className="text-bold text-[16px] ml-[-8px]">Quest 
            <span className="absolute top-[14px] rounded-sm bg-red-500 text-[6px] p-[1px]">new</span>
            </li>
            </Link>
            <li className="mx-[-10px]">
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
                  startContent={icons.scale}
                >
                    <span className='text-[13px] mb-9 font-bold'>{data.title}</span>
                </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>   
            </li>
        
            <li className="mx-[-12px]">
            <Dropdown>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
            <p className="text-bold text-[16px]">Stake</p>
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
                  startContent={icons.scale}
                >
                    <span className='text-[13px] mb-9 font-bold'>{data.title}</span>
                </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>   
            </li> 
           <li className="text-bold text-[16px] hidden lg:flex ">FAQ</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <ConnectWallet />
        </div>
      </div>
    </section>
  );
}
