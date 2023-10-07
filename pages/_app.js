import Head from 'next/head';
import '../styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Loader } from '../components'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(loadingTimeout);} ,
    []);
  return(
    <>    
    <Head>
      <title>Galaxius - The Blockchain Portal Enviroment</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      
    </Head>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
        {isLoading ? (
          <div className='h-screen w-full flex items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
        </main>
      </NextUIProvider>       
    </>
  )
}

export default MyApp;