'use client'
import React from "react";
import styles from "../styles";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGitbook } from 'react-icons/si';
import { Divider } from "@nextui-org/react";
import { exploreLinks, usageLinks, learnLinks } from "../constants";

function Footer() {
	return (
		<>
			<footer className={`${styles.footer} md:mx-20`}>
			<Divider className="my-10" />
			<div className="md:flex justify-around items-start md:px-10">
			<ul label='learn'>
				<span className='font-bold mb-2'>Learn</span>
				{learnLinks.map((data) => (
					<li key='learn' className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
					))}
				</ul>
				<ul label='explore'>
				<span key='explore'  className='font-bold'>Explore</span>
				{exploreLinks.map((data) => (
					<li  key='learn' className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
					))}
				</ul>
				<ul label='build'>
				<span key='build' className='font-bold mb-2'>Build</span>
				{usageLinks.map((data) => (
					<li className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
					))}
				</ul>
				<ul label='usage'>
				<span key='usage' className='font-bold mb-2'>Usage</span>
				{usageLinks.map((data) => (
					<li className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
					))}
				</ul>
					
				<ul label='resources' className='grid gap-2'>
				<span key="resources" className='font-bold'>Resources</span>
				{exploreLinks.map((data) => (
					<li className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
					))}
				</ul>
			</div>

			<div className='flex'>
			<Divider className="my-1" />
			</div>
			<div className=''>
			<div className="md:flex justify-between items-center">
				<div className='flex my-4'>
					<p className='font-bold text-[20px]'>
					Galaxius - The blockchain gamification 
					</p>
				</div>
				
				<div className='flex gap-4 my-4 md:my-0'>
					<FaDiscord />
					<Divider className='h-4' orientation="vertical" />
					<FaTwitter />
					<Divider className='h-4' orientation="vertical" />
					<FaGithub />
					<Divider className='h-4' orientation="vertical" />
					<SiGitbook />
				</div>
			</div>
			
			<p className='hidden md:block text-[12px] text-gray-500 '>
			This website is maintained by the Galaxius Foundation on behalf of the decentralized community. The contents and opinions of this website do not necessarily reflect those of the galaxius foundation. This website links to projects, dApps and cryptocurrency exchanges as a service to the public. The Galaxius does not warrant that the information provided by these websites is correct, complete, and up-to-date. The Galaxius Foundation is not responsible for the content of those websites and expressly rejects any liability for damages of any kind resulting from the use, reference to, or reliance on any information contained within these websites. If you spot an error or issue on this website, please email marketing@galaxius.xyz
			</p>
			<div className="flex justify-start items-center">
			<p className=' my-4 text-gray-400 text-[10px]'>
					©2023 Galaxius Foundation  		
				</p>
			<Divider className='h-4' orientation="vertical" />
			<p className='my-4 text-gray-400 hover:text-white text-[10px]'>
				Privacy 	
			</p>
			<Divider className='h-4' orientation="vertical" />
			<p className='px-2 my-4 text-gray-400 hover:text-white text-[10px]'>
				Terms 	
			</p>
			</div>
			</div>
			</footer>
	
		</>
	);
}

export default Footer;