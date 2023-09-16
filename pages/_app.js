import Head from 'next/head';
import '../styles/globals.css';
import { toast, ToastContainer } from 'react-toastify';
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
  useChainId, 
  } 
  from '@thirdweb-dev/react';
  import { Arbitrum, ArbitrumGoerli } from "@thirdweb-dev/chains";


function MyApp({ Component, pageProps }) {

  return(
    <>    
    <Head>
      <title>Dappln - Web3.0 Portal Integration - </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      
    </Head>
    <ThirdwebProvider 
    clientId='59cf15bcdd14462dfe6ad2e428734a3f'
    activeChain='arbitrum'
    supportedWallets={[magicLink({
      apiKey: "MAGIC_API_KEY",
    }),metamaskWallet(),trustWallet(), coinbaseWallet(), zerionWallet(), rainbowWallet(), frameWallet(), bloctoWallet()]}
    >
      <NextUIProvider>
        <main className="dark text-foreground">
          <Component {...pageProps} />
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
        </main>
      </NextUIProvider>
    </ThirdwebProvider> 
       
    </>
  )
}

export default MyApp;