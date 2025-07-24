import React from 'react'
import ImageComponent from '../ui/Image'
import { BlogsPageDataType } from '@/types/types'

function Card(item: BlogsPageDataType) {
  return (
    <>
      <div className='border border-primary-500 rounded-3xl p-4 group hover:bg-primary-500 hover:border-secondary transition-all duration-500 cursor-pointer'>
        <div className='w-full aspect-square rounded-2xl overflow-hidden'>
          <ImageComponent
            src={item?.img}
            fill
            loading='lazy'
            alt={item?.title}
            className='relative w-full h-full'
          />
        </div>
        <div className='mt-5 flex items-start justify-start gap-5 flex-col'>
          <div className='font-ppMori text-[10px] border border-primary-400 bg-primary-800 rounded-full px-2 py-0.5 w-max'>
            <p className='mt-0.5'>{item?.tag}</p>
          </div>
          <p className='font-alliance text-xl'>{item.title}</p>
          <p className='font-ppMori text-[12px] text-primary-400'>{item.summary}</p>
          <p className='font-ppMori text-[10px] text-primary-400'>{item?.date} | {item?.read_time}</p>
        </div>
      </div>
    </>
  )
}

export default Card