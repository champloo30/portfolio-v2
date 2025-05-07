import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='h-full w-full container px-4 md:px-8 lg:px-16'>{children}</div>
  )
}

export default Container