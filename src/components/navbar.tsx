'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import Image from "next/image"
import darkLogo from '../assets/dark-logo.svg'
import lightLogo from '../assets/light-logo.svg'
import Button from './button'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const {systemTheme, theme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-row justify-between h-20 font-light_display dark:font-dark_display">
      <div className="flex w-1/2 justify-start items-center">
        <a href="/">
          <Image 
          className="cursor-pointer"
          src={currentTheme === 'light' ? lightLogo : darkLogo}
          width={120}
          alt="logo of DJLDev"
        />
        </a>
      </div>
      <div className="flex w-1/2 justify-end items-center text-primary dark:text-dark_primary">
        <ul className="flex flex-row gap-8 text-lg items-center">
          <li className="cursor-pointer"><Link href='/#about'>About</Link></li>
          <li className="cursor-pointer"><Link href='/#projects'>Projects</Link></li>
          <li className="cursor-not-allowed">Freelance</li>
          <li className="cursor-pointer">Contact</li>
          <Link href='/#'><Button buttonName='Resume' /></Link>
        </ul>
      </div>
    </div>
  )
}