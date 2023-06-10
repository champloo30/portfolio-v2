'use client'

import { useState, useEffect } from 'react'
import {useTheme} from 'next-themes'
import Image from "next/image"
import darkLogo from '../assets/dark-logo.svg'
import lightLogo from '../assets/light-logo.svg'
import ThemeToggler from "./themeToggler"
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
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Freelance</li>
          <li className="cursor-pointer">Contact</li>
          <Button buttonName='Resume' />
          <ThemeToggler />
        </ul>
      </div>
    </div>
  )
}