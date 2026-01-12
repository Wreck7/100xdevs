import React from 'react'

export const BasicProjectScreen = () => {
  return (
    <div className='flex'>
        <div className='bg-yellow-300 w-64 hidden md:flex h-screen'>sidebar</div>
        <div className='bg-red-300 w-full h-screen'>content</div>
    </div>
  )
}
