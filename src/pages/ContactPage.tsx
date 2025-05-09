import Button from '@/components/button'
import Container from '@/components/container'
import React from 'react'

export default function ContactPage() {
  return (
    <div id='contact' className='h-screen w-screen flex justify-center items-center'>
      <Container>
        <div className='h-full w-full flex flex-col justify-center items-center gap-8'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-title dark:text-dark_title font-light_mono dark:font-dark_mono'>Get In Touch</h1>
          <p className='w-full sm:w-lg lg:w-160 text-center text-primary dark:text-dark_primary text-lg font-light_display dark:font-dark_display'>I&apos;m currently looking for any and all new opportunities, so my inbox is always open. Whether you have a question or want to grab a coffee, I&apos;ll get back to you as promptly as possible!</p>
          <a href="mailto:djld30@gmail.com">
            <Button buttonName='Say Hello' />
          </a>
        </div>
      </Container>
    </div>
  )
}
