'use client'
import React from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGitbook } from 'react-icons/si';
import { Divider } from "@nextui-org/react";
import Link from "next/link";

function Footer() {
	return (
		<>
			<div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-bold pb-4 text-2xl">
							Dappln - Web3.0 Portal
						</p>
						<div className="flex gap-6 pb-5">
              <Link href='https://discord.com' target='_blank'>
							<FaDiscord className="text-2xl cursor-pointer hover:text-green-500" />
              </Link>
              <Link href='https://twitter.com/dappln' target='_blank'>
							<FaTwitter className="text-2xl cursor-pointer hover:text-green-500" />
              </Link>
              <Link href='https://github.com/dappln' target='_blank'>
							<FaGithub className="text-2xl cursor-pointer hover:text-green-500" />
              </Link>
              <Link href='https://gitbook.com/dappln' target='_blank'>
							<SiGitbook className="text-2xl cursor-pointer hover:text-green-500" />
              </Link>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-lg pb-4">General</p>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							About
						</li>
					
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Trade
						</li>
            	<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Quest
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							DPT Token
						</li>
            <li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Staking
						</li>
            <li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							DAO
						</li>
					</ul>
				</div>
        <div className="p-5">
					<ul>
						<p className="text-white font-bold text-lg pb-4">Resources</p>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Docs
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Whitepaper v.1
						</li>
            <li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Github
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
          <p className="text-white font-bold text-lg pb-4">Community</p>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Community Home
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Genesis
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Events
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Governance
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
          <p className="text-white font-bold text-lg pb-4">Legal</p>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Legal Terms
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Terms of use
						</li>
						<li className="text-white/50 text-[16px] pb-2 hover:text-white cursor-pointer">
							Privacy Policy
						</li>
					
					</ul>
				</div>
			</div>
      <Divider className="my-1 bg-white/5" /> 

			<div className="flex flex-col justify-center items-center text-center p-2 bg-black">
				<p className="text-[12px] text-white/50 font-normal">
					©2023 dappln | all rights reserved
				</p>
			</div>
		</>
	);
}

export default Footer;