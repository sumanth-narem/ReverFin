"use client"

import React from 'react'
import ImageComponent from '../ui/Image'
import { ScrollSectionFeature } from '@/types/types'

export interface SideCardType {
  content: {
    heading: string;
    subheading: string;
  };
  features: ScrollSectionFeature[];
  percent: number;
}

export const SideCard = ({ content, features, percent }: SideCardType) => {
  const normalizedPercent = ((percent - 0.30) / (0.70 - 0.30)) * 100;

  let featureToShowIndex = 2;
  if (normalizedPercent <= 50) {
    featureToShowIndex = 0;
  } else if (normalizedPercent <= 100) {
    featureToShowIndex = 1;
  }

  return (
    <div className=''>
      <div className='flex items-start justify-center flex-col gap-5 pt-12 pb-7 pr-7'>
        <p data-aos="fade-right" data-aos-delay="600" className='font-alliance text-primary-800 text-3xl'>{content?.heading}</p>
        <p data-aos="fade-right" data-aos-delay="800" className='text-gray-400 font-ppMori'>{content?.subheading}</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="1000" className='text-primary-800 text-lg flex items-start justify-start flex-col gap-3'>
        {
          features?.map((item, key) => (
            <div key={key} className='flex items-start justify-start flex-col pt-3 border-t border-primary-50 w-full'>
              <div className='flex items-center justify-center gap-3'>
                <ImageComponent
                  src={item?.icon}
                  loading='lazy'
                  className='h-5 w-5 relative'
                  alt='Validation'
                  fill
                />
                <p className={`text-base ${featureToShowIndex === key ? "text-primary-800 font-semibold" : "text-primary-500 font-normal"} duration-300 transition-all`}>{item?.text}</p>
              </div>
              {/* Show only one feature's content based on normalized percentage */}
              <div className={`${featureToShowIndex === key ? "min-h-10" : "min-h-0"} text-primary-500 h-0 overflow-hidden duration-300 transition-all`}>
                <p className='text-sm w-[80%] ml-8'>{item?.content}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
