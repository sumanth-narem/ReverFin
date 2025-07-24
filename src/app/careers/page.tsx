"use client"

import Career from '@/components/Career'
import React from 'react'

function page() {
  return (
    <>
      <div className='w-full flex items-center justify-center flex-col bg-primary-100'>
        <div className='w-full max-w-[100rem] px-12'>
          <Career />
        </div>
      </div>
    </>
  )
}

export default page