'use client'
import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Image from 'next/image';
const imageLinks = [
  {
    img:"./brands/sol.png",
  },
 
  {
    img:"./brands/kucoin.png",
  },
  {
    img:"./brands/paxgame.png",
  },
  {
    img:"./brands/layer.png",
  },
  {
    img:"./brands/redeon.png",
  },

  {
    img:"./brands/zen.png",
  },
  {
    img:"./brands/bv.png",
  },
  {
    img:"./brands/bnbc.png",
  },
]

const Brand = () => {
  return (
    <section className={`${styles.padding}`}>
      <div className={`${styles.xPadding}`}>
        <div className='grid justify-center items-center'>
     
            <h1 className="font-black my-4 text-center md:text-3xl lg:text-5xl">
              Our Partners  
            </h1>
            </div>
         
      <div className="grid md:grid-cols-4 p-2 gap-4 justify-center items-center mt-10">
       {imageLinks.map((data, index) => (
          <div key={index} className='grid md:flex gap-2'>
              <img src={data.img} alt='' className='md:h-[50px] md:w-[130px] lg:h-[100px] lg:w-[250px]' />
          </div> 
        ))}
       </div>
      </div>
    </section>
  );
};

export default Brand;
