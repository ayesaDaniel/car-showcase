"use client"
import React, { useState } from 'react'
import { useTheme } from "next-themes";


const DarkModeBtn = () => {
    // const { systemTheme, theme, setTheme } = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;


    const [darkMode, setDarkMode] = useState(false);

    return (    
        <button
            onClick={() => setDarkMode(true)}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
            {darkMode ? 
            <h2 className='text-4xl sm:text-6xl md:text-9xl text-center text-gray-800' onClick={()=>setDarkMode(!darkMode)}>LIGHT MODE</h2>
            :  <h2 className= 'text-4xl sm:text-6xl md:text-9xl text-center text-white ' onClick={()=>setDarkMode(!darkMode)}>DARK MODE</h2>
             }
        </button>
    )
}

export default DarkModeBtn