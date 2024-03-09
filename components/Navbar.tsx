"use client"
import * as React from 'react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import CustomButton  from './CustomButton';
import { DarkModeBtn } from '.';
import ThemeSwitcher from './themeSwitcher';



const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
    return ( 
        <header className='w-full absoolute z-10'>
          <nav className='max-w-[1440px] mx-auto flex justify-between
           items-center
            sm:px-16 px-6 py-4 '>  

            <Link href="/" className='flex justify-center items-center'> 
            <Image
            src="/logo.svg"
            alt='car Hub Logo'
            width={118}
            height={18}
            className='object-contain dark:bg-white-900' />
            </Link>

         
      

            <CustomButton 
            title="Sign-in"
            btnType="button"
            containerstyles="text-primary-white rounded-full bg-blue
            min-w-[130px]"
            />

<ThemeSwitcher />
            </nav>  
             </header>
     );
}
 
export default Navbar;