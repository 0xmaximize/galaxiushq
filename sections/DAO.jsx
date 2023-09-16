'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { Card, CardBody, CardFooter, Button, Input, Divider, Spinner, Select, SelectItem, Avatar } from '@nextui-org/react'


function DaoComponent() {
  return(
  <section className={`${styles.paddings}`} aria-label='dao'>
    <div className={`${styles.yPaddings}`}>
      <div className='grid grid-cols-1 gap-4 justify-center items-center'>
        <p>DAO</p>
    
      </div> 
    
    </div>
    </section>
);
}

export default DaoComponent;
