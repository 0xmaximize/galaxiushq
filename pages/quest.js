'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { NavbarQuest, Footer } from '../components'
import {Skeleton, Card, CardBody, Spacer, Select, Button,CardFooter, Spinner} from "@nextui-org/react";
import styles from '../styles';
import { QuestComponent } from '../sections';
import { MdSettings } from 'react-icons/md'

const Quest = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => 
    clearTimeout(loadingTimeout);
  },[]
);

    return (
      <>
      <Head>
      <title>Genesis Quest - Dappln </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dappln" />
      <meta name="twitter:creator" content="@dappln" />
      <meta property="og:title" content="Dappln " />
      <meta property="og:description" content="Join the Genesis Quest & Mission & claim the Genesis Memberpass NFT" />
      <meta property="og:image" content="https://15065ae3c21e0bff07eaf80b713a6ef0.ipfscdn.io/ipfs/bafybeicbcl2mdti6b7pscjzlp4dcpjiyvopit27n4xw5kt2m45pfyppucy/twittercard.png" />
      <meta content="https://15065ae3c21e0bff07eaf80b713a6ef0.ipfscdn.io/ipfs/bafybeicbcl2mdti6b7pscjzlp4dcpjiyvopit27n4xw5kt2m45pfyppucy/twittercard.png" name="twitter:image"/>
          </Head>
    
    <div className="gradient-01 lg:overflow-hidden" aria-label='swap'>
      <>
      {isLoading ? (
        <div className='h-screen w-full flex items-center justify-center '>
          <Spinner size='lg' label='loading...' />
        </div>
      ) : (
      <>
      <NavbarQuest />
      <div className='relative'>
        <QuestComponent />
      </div>
      </>
      )}
      </>
    </div>
    </>
  );
}

export default Quest;
