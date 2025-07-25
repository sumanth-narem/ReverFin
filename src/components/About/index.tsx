"use client"

import React from 'react'
import ImageComponent from '../ui/Image'
import { AboutContent } from '@/constants/About'

function About() {
  return (
    <>
      <div className='w-full border-x border-primary-50 pt-16 px-10 overflow-hidden'>
        <div className='py-20'>
          <div className='flex items-center justify-between flex-row'>
            <div data-aos="fade" className=''>
              <ImageComponent
                alt=''
                fill
                loading='lazy'
                src={AboutContent[0]?.headerImage}
                className='relative w-96 xl:w-[30rem] 2xl:w-[35rem] aspect-square flex items-start justify-start'
              />
            </div>
            <div className='flex flex-col items-start justify-start gap-5 basis-1/2'>
              <p data-aos="fade-left" className='text-4xl font-alliance text-primary-800'>{AboutContent[0]?.question}</p>
              <p data-aos="fade-left" className='text-base font-ppMori text-primary-600'>{AboutContent[0]?.header}</p>
              <p data-aos="fade-left" className='text-base font-ppMori text-primary-600'>{AboutContent[0]?.body}</p>
              <p data-aos="fade-left" className='text-base font-ppMori text-primary-600'>{AboutContent[0]?.footer}</p>
            </div>
          </div>
        </div>
        <div className='flex items-start justify-between flex-row gap-16 pb-20'>
          <div data-aos="fade-up" className='basis-1/2 flex items-start justify-start gap-5 flex-col'>
            <p className='text-4xl font-alliance text-primary-800'>{AboutContent[1]?.question}</p>
            <p className='text-base font-ppMori text-primary-600'>{AboutContent[1]?.header}</p>
            <p className='text-base font-ppMori text-primary-600'>{AboutContent[1]?.body}</p>
          </div>
          <div data-aos="fade-up" className='basis-1/2 flex items-start justify-start gap-5 flex-col'>
            <p className='text-4xl font-alliance text-primary-800'>{AboutContent[2]?.question}</p>
            <p className='text-base font-ppMori text-primary-600'>{AboutContent[2]?.header}</p>
            <p className='text-base font-ppMori text-primary-600'>{AboutContent[2]?.body}</p>
            <p className='text-base font-ppMori text-primary-600 font-bold'>{AboutContent[2]?.footer}</p>
          </div>
        </div>
        <div>
          <p data-aos="fade-up" className='text-center text-4xl font-alliance text-primary-800'>Meet the people behind product</p>
          <div className='py-16 flex items-center justify-center gap-16 flex-row'>
            {
              AboutContent[3]?.profiles?.map((item, key) => (
                <div data-aos="fade" key={key} className='flex items-center justify-center flex-col gap-5'>
                  <div>
                    <ImageComponent
                      src={item?.image}
                      alt={item?.name}
                      fill
                      loading='lazy'
                      className='relative w-80 h-80'
                    />
                  </div>
                  <p className='text-3xl font-alliance text-primary-800'>{item?.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default About