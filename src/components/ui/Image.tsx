import React from 'react'
import Image from 'next/image';
import { ImagePropsType } from '@/types/types';

function ImageComponent({ src, alt, fill = true, loading, className }: ImagePropsType) {
  return (
    <>
      <div className={`${className}`}>
        <Image
          src={src ?? ""}
          alt={alt}
          fill={fill}
          loading={loading}
        />
      </div>
    </>
  )
}

export default ImageComponent