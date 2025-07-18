"use client"

import React from 'react'
import ImageComponent from '../ui/Image'

function Hidden() {
  return (
    <>
      <div className='w-full items-center justify-center flex-col pt-5'>
        <div className='flex items-center justify-center'>
          <ImageComponent
            alt='Image'
            fill
            className='h-20 w-96 relative'
            loading='lazy'
            src='/assets/GettingStarted/GettingStartedU.svg'
          />
        </div>
        <div className='flex items-center justify-center'>
          <div className='bg-primary-300 relative z-[5] rounded-xl w-max flex items-center justify-center flex-row px-5 py-2.5'>
            <ImageComponent
              src='/assets/GettingStarted/IntegrateButton.svg'
              alt=''
              fill
              loading='lazy'
              className='w-4 h-4 relative'
            />
            <p className='text-primary-800 font-ppMori font-semibold'>Integrate</p>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <ImageComponent
            alt='Image'
            fill
            className='h-20 w-72 relative'
            loading='lazy'
            src='/assets/GettingStarted/GettingStartedB.svg'
          />
        </div>
        <div className='font-ppMori flex flex-col gap-3 mt-5 pr-5'>
          <p className='font-semibold text-2xl text-primary-800'>Connect Your Tools</p>
          <p className='text-gray-400'><span className='text-primary-800'>One-click integrations</span> Connect to QuickBooks, NetSuite, Sage, and 70+ other tools. Nodisruption to existing workflows</p>
        </div>
      </div>
    </>
  )
}

export default Hidden