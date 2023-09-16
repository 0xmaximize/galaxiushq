'use client'
import { useState, useEffect } from "react";
import {
  useAddress,
  useContract,
  useNFTs,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { Button, Spinner } from "@nextui-org/react";
import Confetti from "./Confetti";
import { nftDropAddress } from '../constants';
import { toast } from "react-toastify";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { SiOpensea } from 'react-icons/si';

export default function ModalButton() {
  const { contract } = useContract(nftDropAddress);
  const [isVisible, setIsVisible] = useState(false);
  const [claimed, setClaimed] = useState(false); // State to track claimed status
  const [lastMintedAnimationUrl, setLastMintedAnimationUrl] = useState(""); // State to store last minted NFT's animation_url
  const address = useAddress();

  const handleSuccess = () => {
    toast.success("Successfully claimed NFTs!");
    setClaimed(true); // Set claimed status to true
  };
  

  const { data: nfts, isLoading, error } = useNFTs(contract);

  useEffect(() => {
    if (nfts && nfts.length > 0) {
      // Filter NFTs to include only those owned by the user's address
      const userNFTs = nfts.filter((nft) => nft.owner.toLowerCase() === address.toLowerCase());

      if (userNFTs.length > 0) {
        const lastMintedNFT = userNFTs[userNFTs.length - 1];

        if (lastMintedNFT.metadata && lastMintedNFT.metadata.animation_url) {
          setLastMintedAnimationUrl(lastMintedNFT.metadata.animation_url);
        }
      }
    }
  }, [nfts, address]);

  const OpenseaLink = `https://opensea.io/${address}`;
  const ArbiscanLink = `https://arbiscan.io/address/${address}`;


  return (
    <>
      <div className="grid justify-center items-center">
        {claimed ? (
          <>
            {/* Display animation_url if available */}
            {lastMintedAnimationUrl && (
              <ThirdwebNftMedia
                metadata={{ animation_url: lastMintedAnimationUrl }}
                className="my-6 rounded-lg"
              />
            )}
            <Confetti />
           <p className="text-[14px] text-center lg:max-w-[300px]">
           Your pack has been successfully opened
            </p>
            <div className="flex justify-center items-center gap-2 my-4">
            <Link href={ArbiscanLink} target="_blank" rel="noopener noreferrer" >

              <Button 
              color="success" 
              variant="flat"
              endContent={<BsFillArrowRightCircleFill size={18} />}
              >
                See explorer
                </Button>
                </Link>
                <Link href={OpenseaLink} target="_blank" rel="noopener noreferrer" >
              <Button variant="light" color="success" className="text-[14px]"
               endContent={<SiOpensea size={18} />}
               >
               View Opensea
              </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Display loading spinner while fetching NFTs */}
            {isLoading ? (
              <Spinner className="w-[200px] h-[200px]" />
            ) : (
              <>
                <img
                  src="/pack-genesis.png"
                  alt=""
                  className="w-[300px] mt-4 rounded-lg h-[300px] object contain"
                />
                <p className="text-center  mt-4">Your pack is ready to be claimed</p>
                <div className="w-full my-4">
                  <Web3Button
                    contractAddress={nftDropAddress}
                    action={(cntr) => cntr.erc721.claim(1)}
                    style={{ width: "100%" }}
                    theme="dark"
                    onError={(err) => {
                      console.error(err);
                      toast.error(
                        "Failed! Insufficient ETH balance or already claimed"
                      );
                    }}
                    onSuccess={handleSuccess}
                  >
                    Open Pack
                  </Web3Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
