import React from 'react'
import ImageComponent from '../ui/Image';
import { MarqueeChildType } from '@/types/types';

function MarqueeChild({ image, title }: MarqueeChildType) {
  return (
    <>
      <div className='px-5 h-20 flex items-center justify-center border-x border-primary-500'>
        <ImageComponent
          src={image}
          fill
          loading='lazy'
          alt={title}
          className='h-8 w-40 relative'
        />
      </div>
    </>
  )
}

export default MarqueeChild