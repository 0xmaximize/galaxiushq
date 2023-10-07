import Head from 'next/head';
import '../styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from '@nextui-org/react';
import { 
  ThirdwebProvider,
  metamaskWallet, 
  coinbaseWallet, 
  zerionWallet,
  trustWallet,
  frameWallet,
  bloctoWallet,
  rainbowWallet,
  magicLink,
  } 
  from '@thirdweb-dev/react';


function MyApp({ Component, pageProps }) {

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
        <main className="dark text-foreground">
          <Component {...pageProps} />
        </main>
      </NextUIProvider>       
    </>
  )
}

export default MyApp;