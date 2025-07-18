'use client'

import React, { useEffect, useRef, useState } from 'react'
import ImageComponent from '../ui/Image'
import { CardType } from '@/types/types'

function Card({ title, value, symbol, image, imageHover, className }: CardType) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 } // 50% of element visible
    )

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    }
  }, [value, hasAnimated])

  const animateValue = () => {
    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const currentVal = Math.floor(progress * Number(value))
      setDisplayValue(currentVal)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(Number(value))
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <div
      ref={cardRef}
      className={`group flex items-start justify-center flex-col w-72 px-10 pt-20 pb-10 ${className}`}
    >
      <div className="relative h-28 w-28">
        <ImageComponent
          fill
          className="h-full w-full opacity-100 group-hover:opacity-0 transition-opacity duration-500 absolute top-0 left-0"
          alt={title}
          src={image}
          loading="lazy"
        />
        <ImageComponent
          fill
          className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0"
          alt={title}
          src={imageHover}
          loading="lazy"
        />
      </div>

      <div className="group-hover:text-secondary transition-colors duration-500 mt-12">
        <p className="text-5xl font-alliance">
          {displayValue}
          {symbol}
        </p>
        <p className="mt-4 text-primary-100 group-hover:text-secondary transition-colors duration-500 font-ppMori">
          {title}
        </p>
      </div>
    </div>
  )
}

export default Card
