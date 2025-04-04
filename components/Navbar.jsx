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
import { ChevronDown } from "./Icon.jsx";
import Link from "next/link";
import { useRouter } from 'next/router';
import { technologyLinks } from "../constants/index.js";
import EncryptButtons from "./EncryptButton.js";
import Image from 'next/image'
const buttonText1 = () => "Launch Portal";

export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    router.push(link);
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor " size={12} />,
  };
  
  return (
    <section className='w-full bg-transparent overflow-hidden '>
      <div className="flex justify-between mx-4 md:mx-6 lg:mx-20 lg:px-20  py-4">
        <div className="flex justify-between md:gap-4 lg:gap-20">
          <Link href='/'>
            <div className="flex justify-center items-center gap-1 ">
              <Image src='./gave-text.svg' alt='' width={40} height={40} className="w-[120px] h-[30px] md:w-[80px] md:h-[20px] md:mt-[12px] lg:mt-[4px] lg:w-[80px] lg:h-[30px] object-contain"/>
            </div>
          </Link>
        </div>
        <ul className="hidden lg:gap-8 gap-4 md:flex justify-center items-center">
        <li className="">
            <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">About us</p>
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
            <li>
              <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className="lg:text-[14px]">Technology</p>
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
            <li className="">
            <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">GaveDAO</p>
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
            <li>
              <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">Social</p>
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
            <li className="">
            <Dropdown className='dark'>
                <DropdownTrigger >
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                  >
                  <p className=" text-[14px]">About us</p>
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
          <div className="lg:max-w-[160px] lg:min-w-[160px]">
          <EncryptButtons getTargetText={buttonText1} icons={icons.home}/>
          </div>
        </div>
      </div>
    </section>
  );
}
