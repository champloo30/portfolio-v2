import React from 'react'
import Image from 'next/image'
import DJLD from '../assets/DJLD.jpg'

export default function AboutPage() {
  return (
    <div id='about' className='h-[75rem] md:h-screen flex flex-col lg:flex-row justify-center items-center h-screen font-light_display dark:font-dark_display mx-8 md:mx-16 lg:mx-48 md:gap-4 lg:gap-0 mt-64 md:mt-0'>
      <div className='flex lg:flex-1 flex-col justify-center items-start gap-2'>
        <h1 className="text-3xl lg:text-5xl font-light_mono dark:font-dark_mono text-title dark:text-dark_title mt-64 md:mt-0">About Me</h1>
        <p className='w-80 md:w-full lg:w-5/6 text-primary dark:text-dark_primary'>
          Hello! My name is Dalyn and I enjoy creating things that reside on the internet. My journey in Web Development began early 2021 when I finally decided to listen to a friend and try my hand at a career in Computer Science. FreeCodeCamp’s Responsive Web Developer course is what was recommended for me to start and I’ve never looked back!
        </p>
        <p className='w-80 md:w-full lg:w-5/6 text-primary dark:text-dark_primary'>
          Now in the present day, I have had the pleasure of developing and designing for a few freelance opportunities and working for a <a href="https://www.abercrombie.com" target="_blank" rel="noopener noreferrer"><span className='text-title dark:text-dark_title cursor-pointer hover:border-b-2 border-title dark:border-dark_title'>major retail company</span></a>. My focus now is building accessible and inclusive digital experiences for everyone.
        </p>
        <span className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary'>A few things I’ve recently worked with:</span>
        <div className='flex flex-row gap-0.5 md:gap-6 lg:gap-4'>
          <ul>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='text-secondary dark:text-dark_secondary'>HTML/CSS</span>
            </li>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='text-secondary dark:text-dark_secondary'>JavaScript</span>
            </li>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>TypeScript</span>
            </li>
          </ul>
          <ul>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>React</span>
            </li>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>Next</span>
            </li>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>TailwindCSS</span>
            </li>
          </ul>
          <ul>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>Node</span>
            </li>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>Express</span>
            </li>
            <li className='flex flex-row gap-0.5 md:gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-title dark:fill-dark_title' height="24" viewBox="0 -960 960 960" width="24"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
              <span className='font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary'>MongoDB</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex relative top-8 lg:top-0 group'>
        <div className="w-[360px] h-[480px] border-2 border-title dark:border-dark_title rounded relative left-3 group-hover:translate-x-2 group-hover:translate-y-2 transition linear duration-300"></div>
        <Image 
          className='bg-title rounded absolute -top-3 group-hover:-translate-x-2 group-hover:-translate-y-2 transition linear duration-300'
          src={DJLD}
          width={360}
          height={420}
          alt='Picture of Dalyn Dunn'
        />
        <div className="w-[360px] h-[480px] bg-title dark:bg-dark_title rounded absolute -top-3 opacity-60 hover:opacity-0 transition linear duration-300"></div>
      </div>
    </div>
  )
}
