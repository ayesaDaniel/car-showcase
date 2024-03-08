"use client"
import { customButtonProps } from '@/types';
import Image from 'next/image';
import * as React from 'react';

const CustomButton = 
({title,containerstyles,handleClick,btnType, textStyles,rightIcon}:customButtonProps) => {
    return ( 
        <button
        disabled ={false}
        type= {btnType||"button"}
        className={`custom-btn ${containerstyles}`}
        onClick={handleClick} > 
<span className={`flex-1 ${textStyles}`}> 
{title}</span>
{ rightIcon && 
<div className='relative w-6 h-6'>
<Image 
fill
className='object-contain'
alt='right icon'
src={rightIcon}/>
</div>
}
        </button>
     );
}
 
export default CustomButton;
