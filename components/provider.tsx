'use client'

import { ThemeProvider } from "next-themes"
import * as React from 'react';
import { useState, useEffect } from 'react';
type props = {
    children:string | React.JSX.Element | React.JSX.Element[]
}

const Provider = ({children}: props) => {
    const [mounted , setMounted] = useState(false)

    useEffect (()=>{
        setMounted(true)
    } ,[])

    if (!mounted) {
        return <> {children}</>
    }
    return(
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    )
}
export default Provider;