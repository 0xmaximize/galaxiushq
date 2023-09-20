'use client';
import React, { useState } from "react";
import {
  Button, 
  DropdownItem,
  DropdownTrigger, 
  Dropdown, 
  DropdownMenu, 
} from "@nextui-org/react";
import { CgArrowTopRightR } from 'react-icons/cg';
import {ChevronDown, WalletIcon, Data, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icon.jsx";
import Link from "next/link";
import { useRouter } from 'next/router';
import { technologyLinks, daoLinks, earnLinks } from "../constants/index.js";

export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    router.push(link);
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor " size={12} />,
    wallets: <WalletIcon className="text-warning" fill="currentColor" size={30} />,
    scale: <Scale className="text-white" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    data: <Data className="text-primary" fill="currentColor" size={30} />,
  };
  
  return (
    <section className='w-full bg-white/5 overflow-hidden '>
      <div className="flex justify-between mx-4 md:mx-6 lg:mx-20 py-3">
        <div className="flex justify-between md:gap-4 lg:gap-20">
          <Link href='/'>
            <div className="flex gap-1">
              <h4 className="font-semibold mt-[3px] hidden lg:flex text-[20px]">Galaxius</h4>    
            </div>
          </Link>
        </div>
        <ul className="hidden lg:gap-8 gap-4 md:flex justify-center items-center">
          <Link href='/' > 
            <li className="text-[14px] text-white hover:text-white/70">About</li>
          </Link>
            <li>
              <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">Technology</p>
                  </Button>
                </DropdownTrigger>    
                <DropdownMenu
                  aria-label="Trade"
                  className="w-[420px]"
                  itemClasses={{
                    base: "my-2 py-2 ",
                  }}
                >
                {technologyLinks.map((data) => (
                  <DropdownItem
                    key='Trade'
                    description={data.description}
                    onClick={() => handleLinkClick(data.to)}
                    endContent={<CgArrowTopRightR className="text-white text-[32px] justify-start items-start my-4"/>}
                    classNames={{
                      base: "py-1 px-1 border border-black bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                      description: "bg-black",
                    }}
                    >
                      <p className="text-white text-[16px] pb-2 ">{data.title}</p>
                      </DropdownItem>
                  
                    ))}
                </DropdownMenu>
              </Dropdown>
            </li>
           
            <li>
              <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">Galaverse</p>
                  </Button>
                </DropdownTrigger>    
                <DropdownMenu
                  aria-label="Trade"
                  className="w-[420px] flex "
                  itemClasses={{
                    base: "my-2 py-2 ",
                  }}
                >
                {technologyLinks.map((data) => (
                  <DropdownItem
                    key='Trade'
                    description={data.description}
                    onClick={() => handleLinkClick(data.to)}
                    endContent={<CgArrowTopRightR className="text-white text-[32px] justify-start items-start my-4"/>}
                    classNames={{
                      base: "py-1 px-1 border border-black bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                      description: "bg-black",
                    }}
                    >
                      <p className="text-white text-[16px] pb-2 ">{data.title}</p>
                      </DropdownItem>
                  
                    ))}
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="text-white hover:text-white/70 text-[14px] hidden lg:flex ">Forum</li>
            <li className="">
            <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">Docs</p>
                  </Button>
                </DropdownTrigger>    
                <DropdownMenu
                  aria-label="Trade"
                  className="w-[420px] flex "
                  itemClasses={{
                    base: "my-2 py-2 ",
                  }}
                >
                {technologyLinks.map((data) => (
                  <DropdownItem
                    key='Trade'
                    description={data.description}
                    onClick={() => handleLinkClick(data.to)}
                    endContent={<CgArrowTopRightR className="text-white text-[32px] justify-start items-start my-4"/>}
                    classNames={{
                      base: "flex py-1 px-1 border border-black bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                      description: "bg-black",
                    }}
                    >
                      <p className="text-white text-[16px] pb-2 ">{data.title}</p>
                      </DropdownItem>
                  
                    ))}
                </DropdownMenu>
              </Dropdown>
            </li>
        
          </ul>
        <div className="flex justify-center items-center">
          <div className="">
            <Button size="md" variant="flat">
               Launch Portal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
