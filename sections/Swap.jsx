'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { Card, CardBody, CardFooter, Image, CardHeader, Button, Input, Divider, Spinner, Select, SelectItem, Avatar } from '@nextui-org/react'
import { AiOutlineSwap } from 'react-icons/ai';
import { MdSettings, MdArrowOutward } from 'react-icons/md'
import { BiSolidGasPump } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { ImArrowUpRight2 } from 'react-icons/im';
import { SelectedTokens } from '../constants';
import { Web3Button } from '@thirdweb-dev/react'

function SwapComponent() {
  const [values, setValues] = useState(new Set([]));
  const handleSelectionChange = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };

  return(
  <section aria-label='swap' className={`${styles.paddings}`}>
    <div className={`${styles.yPaddings}  justify-center items-center`}>
      <div className='grid grid-cols-1 gap-4 justify-center items-center'>
        <Card className='w-[360px] md:w-[400px] lg:w-[460px]'>
          <div className='flex justify-between items-center mt-4 mx-6'>
            <div className='flex gap-4'>
              <p className='text-[14px]'>Swap</p> 
              <p className='text-white/10 text-[14px] hover:text-white'>Buy</p>
            </div>
            <MdSettings size={20} className='text-white/50 hover:text-white' />
          </div>
         
          <CardBody className='flex p-6 gap-2'>
            <div className='flex gap-2'>
              <Input className='w-[100%]'
              type='number'
              placeholder='0'
              size='lg'
              /> 
             <Select
              items={SelectedTokens}
              placeholder="Select token"
              defaultSelectedKeys={["ETH"]}
              classNames={{
              base: "max-w-[118px]",
              trigger: "h-11",
              }}
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Avatar
                      alt={item.data.name}
                      className="flex-shrink-0 w-[26px] h-[26px]"             
                      src={item.data.logo}
                    />
                    <div className="flex flex-col">
                      <span>{item.data.name}</span>
                    </div>
                  </div>
                ));
              }}
            >
              {(user) => (
                <SelectItem key={user.id} textValue={user.name}>
                  <div className="flex gap-2 items-center">
                    <Avatar alt={user.name} 
                    className="flex-shrink-0 w-[20px] h-[20px]"             
                    size="sm" src={user.logo} />
                    <div className="flex flex-col">
                      <span className="text-small ">{user.name}</span>
                    </div>
                  </div>
                </SelectItem>
            
              )}
          </Select>    
             
            </div>
            <div className='flex justify-center items-center ml-[-8rem] my-[-1rem] z-10'>
            <AiOutlineSwap className='border text-white/60 hover:bg-white/30  border-white/20 bg-[#454545] m-[2px] rounded-sm'/>
            </div>
            <div className='flex gap-2 rounded-sm bg- '>
              <Input className='w-full'
              type='number'
              placeholder='0'
              size='lg'
              /> 
          <Select
          items={SelectedTokens}
          placeholder="Select token"
          defaultSelectedKeys={["ARB"]}
          onChange={handleSelectionChange}
          selectedKeys={values}
          classNames={{
            base: "max-w-[118px]",
            trigger: "h-11",
          }}
          renderValue={(items) => {
            return items.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <Avatar
                  alt={item.data.name}
                  className="flex-shrink-0 w-[26px] h-[26px]"             
                  src={item.data.logo}
                />
                <div className="flex flex-col">
                  <span>{item.data.name}</span>
                </div>
              </div>
              ));
            }}>
              {(user) => (
              <SelectItem key={user.id} textValue={user.name}>
                <div className="flex gap-2 items-center">
                  <Avatar alt={user.name} 
                  className="flex-shrink-0 w-[20px] h-[20px]"             
                  size="sm" src={user.logo} />
                  <div className="flex flex-col">
                    <span className="text-small">{user.name}</span>
                  </div>
                </div>
              </SelectItem>
        )}
          </Select>
            </div>
            <div className='flex mx-1 mt-4 justify-between items-center'>
            <p className='text-[10px] text-white/50 bg-white/5 px-1 rounded-lg flex gap-1'><BsInfoCircle className='text-[12px] mt-[1px]' />current price {Array.from(values)} = (~$0.0)</p>
            <p className='text-[10px] text-white/50 bg-white/5 px-1 rounded-lg flex gap-1'><BiSolidGasPump className='mt-[2px]'/>gas estimate = (~$0.0)</p>
            </div>
            <Divider className="my-2 mb-0" />
            <CardFooter className='justify-center'>
              <Web3Button 
              style={{
              
              boxShadow:'0 0 5px #02eb4b',
              background:'#02eb4b',
              color:'#1b1b1c',
              boxShadow:' 0 0 5px #02eb4b',
              background:'#02eb4b',
              fontWeight:'900',
              width:'100%',
              }}>
                  SWAP NOW
                </Web3Button>

            </CardFooter>
          </CardBody>
        </Card>
        <Card isPressable className='w-[360px] md:w-[400px] lg:w-[460px] h-[100px]'>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <div className='flex justify-between w-full'>
        <p className="text-tiny text-white/60 uppercase font-bold">Bridge Token </p>
           <MdArrowOutward />
        </div>
        <h4 className="text-white font-medium text-large">Deposit to the Arbitrum Network</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="../arbss.png"
      />
     
        </Card>
      </div>     
    </div>
    </section>
  );
}

export default SwapComponent;
