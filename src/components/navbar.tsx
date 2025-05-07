'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import Image from "next/image"
import darkLogo from '../assets/dark-logo.svg'
import lightLogo from '../assets/light-logo.svg'
import Button from './button'
import ThemeToggler from './themeToggler'
import Container from './container'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const {systemTheme, theme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed lg:static h-20 w-screen flex justify-center items-center font-light_display dark:font-dark_display bg-light/90 dark:bg-dark/90 z-30"> 
      <Container>
        <div className="h-full w-full flex flex-row justify-between">
          <div className="flex justify-start items-center">
            <a href="/">
              <h1 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title text-5xl'>DJLD</h1>
            </a>
          </div>
          <div className="hidden lg:flex text-primary dark:text-dark_primary">
            <ul className="flex flex-row gap-8 text-lg items-center">
              <li className="cursor-pointer hover:border-b-2 hover:border-title dark:hover:border-dark_title transition linear duration-300"><Link href='/#about'>About</Link></li>
              <li className="cursor-pointer hover:border-b-2 hover:border-title dark:hover:border-dark_title transition linear duration-300"><Link href='/#projects'>Projects</Link></li>
              <li className="cursor-pointer hover:border-b-2 hover:border-title dark:hover:border-dark_title transition linear duration-300"><a href="http://dunnovativestudios.com/" target="_blank" rel="noopener noreferrer">Freelance</a></li>
              <li className="cursor-pointer hover:border-b-2 hover:border-title dark:hover:border-dark_title transition linear duration-300"><Link href='/#contact'>Contact</Link></li>
              <a href='/DJLD_Resume_24.pdf' target="_blank" rel="noopener noreferrer"><Button buttonName='Resume' /></a>
            </ul>
          </div>
          <div className='h-20 lg:hidden mr-12 md:mr-20 lg-tab:mr-[5.5rem] flex justify-end items-center'>
            <div className='flex flex-col justify-center items-center gap-8'>
              <svg className='absolute z-40 w-8 h-8 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" onClick={() => setIsOpen(!isOpen)}>
                {isOpen === false ? 
                  <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                  :
                  <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                }
              </svg>
              <ul className={isOpen === false ? `hidden` : `absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center gap-4 md:gap-5 bg-light/90 dark:bg-dark/90 text-2xl md:text-3xl text-primary dark:text-dark_primary`}>
                <li onClick={() => setIsOpen(false)}><Link href='/'>Home</Link></li>
                <li onClick={() => setIsOpen(false)}><Link href='/#about'>About</Link></li>
                <li onClick={() => setIsOpen(false)}><Link href='/#projects'>Projects</Link></li>
                <li onClick={() => setIsOpen(false)}>Freelance</li>
                <li onClick={() => setIsOpen(false)}><Link href='/#contact'>Contact</Link></li>
                <li><a href="/DJLD_Resume_24.pdf" target="_blank" rel="noopener noreferrer"><Button buttonName='Resume' /></a></li>
                <ul className='flex flex-row gap-4 mt-8'>
                  <li><ThemeToggler /></li>
                  <li>
                    <a href="https://github.com/champloo30" target="_blank" rel="noopener noreferrer">
                      <svg className='fill-secondary dark:fill-dark_secondary w-6 md:w-8' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dalyn-dunn-a70176216/" target="_blank" rel="noopener noreferrer">
                      <svg className='fill-secondary dark:fill-dark_secondary w-6 md:w-8' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fill-rule="evenodd"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:djld30@gmail.com">
                      <svg className='w-7 md:w-9 fill-secondary dark:fill-dark_secondary' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
                <p className='absolute bottom-8 text-title dark:text-dark_title text-base md:text-lg'>Designed & Developed by DJLDev</p>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}