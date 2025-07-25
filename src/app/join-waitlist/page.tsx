"use client"

import JoinWaitlist from '@/components/JoinWaitlist'
import React from 'react'

function page() {
  return (
    <>
      <div className='w-full flex items-center justify-center flex-col'>
        <div className='w-full max-w-[100rem] px-12'>
          <JoinWaitlist />
        </div>
      </div>
    </>
  )
}

export default page