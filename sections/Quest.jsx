'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { ConnectedCard, NotConnectedCard } from '../components'
import { BsTwitter, BsCheckCircleFill, BsDiscord, BsDot, BsInfoCircleFill } from 'react-icons/bs';
import { BiSolidCopy } from 'react-icons/bi';
import { accordionText } from '../constants';
import {
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
  Divider,
  Button,
  Spinner,
  CardFooter,
  Table, TableHeader, TableColumn, TableBody, Pagination
} from '@nextui-org/react';
import {
  ConnectWallet,
  useAddress,
  useContract,
  Web3Button,
  useDisconnect
} from "@thirdweb-dev/react";

function QuestComponent() {
  const nftDropAddress = '0x5a714430e51334350e19A57A05bEE71d6453c1c2';
  const address = useAddress();
  const { contract: nftDropContract } = useContract(nftDropAddress, "nft-drop");
  const [selected, setSelected] = useState("photos");
  const disconnect = useDisconnect();

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

  return (
    <section aria-label='swap' className={`${styles.paddings}`}>
      <div className={`${styles.interWidth} justify-center items-center my-10 `}>
        <div className="flex flex-col justify-center items-center">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab 
            key="Quest" 
            title="Quest" 
            className='flex gap-10 justify-center items-center'
            >
              {address ? (
              <div className='lg:flex lg:flex-col-1 gap-4 mt-4'>
                <ConnectedCard />
              </div>
            ):( 
              <div className='lg:flex lg:flex-col-1 gap-4 mt-4'>
              <NotConnectedCard />
            </div>
              )}
            </Tab>
            <Tab key="Recent" title="Recent" className='flex gap-10 justify-center items-center'>
              <div className='grid justify-center items-center mt-10 gap-10'>
              <div>
              <Table aria-label="Example empty table" className='flex gap-10 md:min-w-[400px] lg:min-w-[600px]'>
            <TableHeader >
              <TableColumn >ADDRESS</TableColumn>
              <TableColumn>TX HASH</TableColumn>
              <TableColumn>STATUS</TableColumn>
      
            </TableHeader>
      <TableBody  emptyContent={<Spinner size='md' label='loading...' />}>{[]}</TableBody>
    </Table>
    </div>
    <div className='flex justify-center'>
    <Pagination color='success' total={10} initialPage={1} />
    </div>
              </div>
            </Tab>
            <Tab key="FAQs" title="FAQs">
              <div className={` my-10 flex justify-center items-center min-w-[360px] max-w-[360px] md:max-w-[680px] md:min-w-[680px]`}>
           

                <Accordion  variant="bordered" className='bg-black' defaultExpandedKeys={["1"]}>
                {accordionText.map((data) => (
                  <AccordionItem
                    key={data.key}
                    aria-label="Accordion 1"
                    title={data.title}
                  >
                    {data.text}
                  </AccordionItem>
                  ))}
                </Accordion>
                     
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default QuestComponent;
