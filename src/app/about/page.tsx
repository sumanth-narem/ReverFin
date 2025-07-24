"use client"

import About from '@/components/About'
import React from 'react'

function page() {
  return (
    <>
      <div className='bg-primary-100 w-full flex items-center justify-center flex-col'>
        <div className='w-full max-w-[100rem] px-12'>
          <About />
        </div>
      </div>
    </>
  )
}

export default page