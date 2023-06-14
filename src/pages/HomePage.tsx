'use client'

import React from 'react'
import Button from '../components/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div id='/' className='flex flex-col justify-center items-start gap-4 lg:gap-2 h-screen mx-8 lg:mx-48'>
      <h3 className='text-xl lg:text-3xl font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Hello, my name is</h3>
      <h1 className='text-4xl lg:text-8xl font-light_display dark:font-dark_display font-bold text-primary dark:text-dark_primary -ml-1'>Dalyn J. L. Dunn</h1>
      <h2 className='font-light_display dark:font-dark_display text-3xl lg:text-[4rem] text-secondary dark:text-dark_secondary w-80 lg:w-2/3 -ml-0.5'>I design and develop things for the web</h2>
      <Link href='/#contact'>
        <Button buttonName="Let's Chat" />
      </Link>
    </div>
  )
}
