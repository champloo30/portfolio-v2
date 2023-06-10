'use client'

import { useState, useEffect } from 'react'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false)
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button type='button'>
      <Image 
        className="cursor-pointer"
        src={currentTheme === 'light' ? moon : sun}
        width={24}
        alt="switch to current theme"
        aria-hidden='true'
        onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
      />
    </button>
  )
}