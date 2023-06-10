import React from 'react'
import Button from './button'

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-start gap-2 lg:h-[90vh]'>
      <h3 className='text-3xl font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Hello, my name is</h3>
      <h1 className='text-8xl font-light_display dark:font-dark_display font-bold text-primary dark:text-dark_primary -ml-1'>Dalyn J. L. Dunn</h1>
      <h2 className='font-light_display dark:font-dark_display text-[4rem] text-secondary dark:text-dark_secondary w-2/3 -ml-0.5'>I design and develop things for the web</h2>
      <Button buttonName="Let's Chat" />
    </div>
  )
}
