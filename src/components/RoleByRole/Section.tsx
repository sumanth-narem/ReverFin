"use client"

import { RbyRData } from '@/constants/RbyRData'
import React, { useEffect, useRef, useState } from 'react'
import ImageComponent from '../ui/Image'

function Section() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        setScrollValue(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollValue > 700 && scrollValue < 1400) {
      if (activeTab !== 1) {
        setActiveTab(1);
      }
    } else if (scrollValue > 1400 && scrollValue < 2100) {
      if (activeTab !== 2) {
        setActiveTab(2);
      }
    } else if (scrollValue > 2100) {
      if (activeTab !== 3) {
        setActiveTab(3);
      }
    } else {
      if (activeTab !== 0) {
        setActiveTab(0);
      }
    }
  }, [scrollValue, activeTab]);

  return (
    <>
      <div ref={containerRef} className='h-[2600px]'>
        <div className='sticky -top-5 flex items-center justify-center flex-wrap border-r border-primary-500'>
          <div className='py-36 border-r border-primary-500 flex items-start justify-center flex-col basis-1/2 xl:pl-12'>
            <p className='font-alliance text-4xl'>What You Get - Role by Role</p>
            <div className='w-full pt-7'>
              {
                RbyRData?.map((item, key) => (
                  <div key={key} className={`border-b ${activeTab === key ? "border-secondary" : "border-primary-500"} duration-500 transition-colors`}>
                    <p className='font-ppMori text-xl py-5 w-full cursor-pointer'>{item?.heading}</p>
                    <div className={`overflow-y-hidden ${activeTab === key ? "h-[6rem]" : "h-0"} min-h-0 transition-all duration-500`}>
                      {
                        <ul data-aos="fade-right" className='text-primary-400 pb-5'>
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
          <div className='basis-1/2 flex items-center justify-center w-full p-5'>
            <ImageComponent
              alt='RbyRImage'
              loading='lazy'
              fill
              src='/assets/RbyR.jpg'
              className='relative w-full xl:w-[30rem] aspect-square rounded-2xl overflow-hidden'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section