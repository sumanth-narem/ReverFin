import React from 'react'
import ImageComponent from '../ui/Image'
import { IntegrationsCardType } from '@/types/types'

function Card({ item, keyValue }: IntegrationsCardType) {
  return (
    <div
      key={item?.name}
      data-aos="fade-up"
      data-aos-delay={keyValue * 100}
      className="group relative w-full aspect-square perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style ${item?.category !== "Coming Soon" ? "preserve-3d group-hover:rotate-y-180" : "opacity-50"}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden w-full h-full flex flex-col items-center justify-center border border-primary-50 rounded-3xl">
          <ImageComponent
            alt={item?.name}
            fill
            loading="lazy"
            src={item?.img}
            className="h-24 aspect-square relative"
          />
          {
            item?.category &&
            <div className='bg-primary-200 text-primary-600 rounded-xl px-3 pt-1 pb-2 absolute bottom-3 right-3 xl:bottom-5 xl:right-5'>
              <p className='text-[12px] md:text-sm'>{item?.category}</p>
            </div>
          }
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center border border-primary-50 rounded-3xl bg-primary-100">
          <p className="text-primary-800 font-ppMori text-center text-sm px-4">{item?.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
