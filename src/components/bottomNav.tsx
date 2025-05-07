'use client'
import React, { useState, useEffect } from 'react'
import { motion, Variants, useScroll, useAnimationControls } from "framer-motion"
import Link from 'next/link'

const MenuItemVariants: Variants = {
  hide: { display: 'none', opacity: 0, transition: {duration: 0.5} },
  show: { display: 'block', opacity: 1, transition: {duration: 0.5} },
};

export default function BottomNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.1) {
        controls.start('show');
      } else {
        controls.start('hide');
        setIsOpen(false)
      }
    });
  });

  return (
    <div className='hidden lg:block lg:fixed z-20'>
      <div className={isOpen === true ? 'fixed inset-0 z-10 w-screen h-screen bg-light/80 dark:bg-dark/80 transition linear duration-300' : 'fixed'} onClick={() => setIsOpen(false)}></div>
      <div className='fixed bottom-10 inset-x-0 z-30 flex flex-row justify-center items-center gap-4'>
        <motion.div className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title bg-title/20 dark:bg-dark_title/20 cursor-pointer hover:bg-title dark:hover:bg-dark_title transition linear duration-300' variants={MenuItemVariants} initial="hide" animate={controls} onClick={() => setIsOpen(!isOpen)}>
          <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>{isOpen === false ? 'Menu' : 'Close'}</span>
          <svg className='relative top-1.5 left-1.5 w-8 h-8 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            {isOpen === false ? 
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
              :
              <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            }
          </svg>
        </motion.div>
        {isOpen === true ? 
          <ul className='flex flex-row gap-4'>
            <Link href='/'>
              <li className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title cursor-pointer hover:bg-title dark:hover:bg-dark_title transition linear duration-300' onClick={() => setIsOpen(false)}>
                <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>Home</span>
                <svg className='relative top-1 left-1.5 w-8 h-8 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>
              </li>
            </Link>
            <Link href='/#about'>
              <li className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title cursor-pointer hover:bg-title dark:hover:bg-dark_title transition linear duration-300' onClick={() => setIsOpen(false)}>
                <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>About</span>
                <svg className='relative top-1 left-1.5 w-8 h-8 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title cursor-pointer hover:bg-title dark:hover:bg-dark_title transition linear duration-300' onClick={() => setIsOpen(false)}>
                <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='relative top-1.5 left-1.5 w-8 h-8 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' viewBox="0 -960 960 960"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              </li>
            </Link>
            <li className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title cursor-not-allowed hover:bg-title dark:hover:bg-dark_title transition linear duration-300'>
              <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>Freelance</span>
              <svg className='relative top-2 left-2 w-7 h-7 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M70-120q-12.75 0-21.375-8.675Q40-137.351 40-150.175 40-163 48.625-171.5T70-180h820q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-120H70Zm70-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm0 0v-480 480Z"/></svg>
            </li>
            <Link href='/#contact'>
              <li className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title cursor-pointer hover:bg-title dark:hover:bg-dark_title transition linear duration-300' onClick={() => setIsOpen(false)}>
                <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>Contact</span>
                <svg className='relative top-2 left-2 w-7 h-7 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"/></svg>
              </li>
            </Link>
            <a href='/DJLD_Resume_24.pdf' target="_blank" rel="noopener noreferrer">
              <li className='relative group w-12 h-12 rounded-full border-2 border-title dark:border-dark_title cursor-pointer hover:bg-title dark:hover:bg-dark_title transition linear duration-300' onClick={() => setIsOpen(false)}>
                <span className='absolute font-light_display dark:font-dark_display text-title dark:text-dark_title opacity-0 group-hover:opacity-100 -top-8 transition linear duration-300'>Resume</span>
                <svg className='relative top-1.5 left-1.5 w-8 h-8 fill-title dark:fill-dark_title group-hover:fill-light dark:group-hover:fill-dark transition linear duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M277-279h275v-60H277v60Zm0-171h406v-60H277v60Zm0-171h406v-60H277v60Zm-97 501q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>
              </li>
            </a>
          </ul>
        : null}
      </div>
      <div className='fixed inset-x-0 bottom-2 flex justify-center'>
        <a href="https://github.com/champloo30" target="_blank" rel="noopener noreferrer" className='text-secondary dark:text-dark_secondary font-light-display dark:font-dark_display hover:text-title dark:hover:text-dark_title transiton linear duration-300'>Designed & Developed by DJLDev</a>
      </div>
    </div>
  )
}
