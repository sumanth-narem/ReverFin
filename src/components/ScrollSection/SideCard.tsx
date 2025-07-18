import React from 'react'
import ImageComponent from '../ui/Image'
import { ScrollSectionDataType } from '@/types/types'

export const SideCard = ({ content, features, item, percent }: ScrollSectionDataType) => {
  return (
    <>
      <div className=''>
        <div className='flex items-start justify-center flex-col gap-5 pt-20 pb-10 pr-7 border-b border-primary-50'>
          {/* <p className='text-primary-800'>Section {item}: {(percent ?? 1 * 100).toFixed(1)}%</p> */}
          <p data-aos="fade-right" data-aos-delay="600" className='font-alliance text-primary-800 text-5xl'>{content?.heading}</p>
          <p data-aos="fade-right" data-aos-delay="800" className='text-gray-400 font-ppMori'>{content?.subheading}</p>
        </div>
        <div data-aos="fade-right" data-aos-delay="1000" className='text-primary-800 text-lg flex items-start justify-start flex-col gap-4 pt-10'>
          {
            features?.map((item, key) => (
              <div key={key} className='flex items-center justify-center gap-3'>
                <ImageComponent
                  src={item?.icon}
                  loading='lazy'
                  className='h-5 w-5 relative'
                  alt='Validation'
                  fill
                />
                <p>{item?.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}