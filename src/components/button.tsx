import React from 'react'

export default function Button({buttonName}: {buttonName: string}) {
  return (
    <div>
      <button className={`font-light_mono dark:font-dark_mono text-base text-title dark:text-dark_title font-normal rounded border-2 border-title dark:border-dark_title py-1 px-4 hover:bg-title hover:text-light dark:hover:bg-dark_title dark:hover:text-dark transition linear duration-300`}>{buttonName}</button>
    </div>
  )
}