"use client"

import React from 'react'
import ImageComponent from '../ui/Image'

function Career() {
  return (
    <>
      <div className='w-full min-h-screen border-x border-primary-50 px-10 overflow-hidden'>
        <div className='flex items-center justify-between flex-row py-20'>
          <div data-aos="fade" className=''>
            <ImageComponent
              alt=''
              fill
              loading='lazy'
              src="/assets/Careers.svg"
              className='relative w-96 xl:w-[30rem] 2xl:w-[35rem] aspect-square flex items-start justify-start'
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-5 basis-1/2'>
            <p data-aos="fade-left" className='text-4xl font-alliance text-primary-800'>Join Our Team</p>
            <p data-aos="fade-left" className='text-base font-ppMori text-primary-600'>
              Explore flexible career opportunities at Rever.
              Be part of our mission to simplify and transform finance operations,
              creating smarter, more efficient, and rewarding experiences for finance teams worldwide.
            </p>
            <p data-aos="fade-left" className='text-base font-ppMori text-primary-600'>Email us at <a href="mailto:careers@reverfin.ai" className='font-bold'>Careers@reverfin.ai</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career