import React from 'react'

export default function Button({buttonName}: {buttonName: string}) {
  return (
    <button className="font-light_mono dark:font-dark_mono text-base dark:text-lg text-title dark:text-dark_title dark:font-normal rounded border-2 border-title dark:border-dark_title py-1 px-4">{buttonName}</button>
  )
}