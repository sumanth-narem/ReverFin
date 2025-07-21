"use client"

import React from 'react'
import ImageComponent from '../ui/Image'
import { gettingStarted } from '@/constants/GettingStarted'

function Hidden({ index }: { index: number }) {
  return (
    <>
      <div className='w-full items-center justify-center flex-col pt-7'>
        <div className='flex items-center justify-center'>
          <ImageComponent
            alt='Image'
            fill
            className='h-[11rem] w-96 relative'
            loading='lazy'
            src={gettingStarted[index]?.img}
          />
        </div>
        <div className='font-ppMori flex flex-col gap-3 mt-7 pr-5'>
          <p className='font-semibold text-2xl text-primary-800'>{gettingStarted[index]?.heading}</p>
          <p className='text-gray-400'>{gettingStarted[index]?.content}</p>
        </div>
      </div>
    </>
  )
}

export default Hidden