import React from 'react'

export default function Button({buttonName}: {buttonName: string}) {
  return (
    <div>
      <button className={`font-light_mono dark:font-dark_mono text-base md:text-[2rem] md:text-lg text-title dark:text-dark_title font-normal rounded border-2 border-title dark:border-dark_title py-1 md:py-3 lg:py-2 px-4 md:px-6 lg:px-5 hover:bg-title hover:text-light dark:hover:bg-dark_title dark:hover:text-dark transition linear duration-300`}>{buttonName}</button>
    </div>
  )
}