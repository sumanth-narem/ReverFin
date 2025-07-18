"use client"

import { RbyRData } from '@/constants/RbyRData'
import React, { useState } from 'react'
import ImageComponent from '../ui/Image'

function Section() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? 0 : index))
  }

  return (
    <>
      <div className='flex items-center justify-center flex-wrap border-r border-primary-500'>
        <div className='py-36 border-r border-primary-500 flex items-start justify-center flex-col basis-1/2 pl-12 w-full'>
          <p className='font-alliance text-4xl'>What You Get - Role by Role</p>
          <div className='w-full pt-16'>
            {
              RbyRData?.map((item, key) => (
                <div key={key} className={`border-b ${openIndex === key ? "border-secondary" : "border-primary-500"} duration-500 transition-colors`}>
                  <p className='font-ppMori text-xl py-5 w-full cursor-pointer' onClick={() => handleToggle(key)}>{item?.heading}</p>
                  <div className={`overflow-y-hidden ${openIndex === key ? "h-[6rem]" : "h-0"} min-h-0 transition-all duration-500`}>
                    {
                      <ul className='text-primary-400 pb-5'>
                        {
                          item?.content?.map((value, key) => (
                            <li key={key}>
                              {value}
                            </li>
                          ))
                        }
                      </ul>
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='basis-1/2 flex items-center justify-center'>
          <ImageComponent
            alt='RbyRImage'
            loading='lazy'
            fill
            src='/assets/RbyR.jpg'
            className='relative h-[30rem] w-[30rem] rounded-2xl overflow-hidden'
          />
        </div>
      </div>
    </>
  )
}

export default Section