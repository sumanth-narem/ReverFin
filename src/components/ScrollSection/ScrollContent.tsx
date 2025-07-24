'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollSectionData } from '@/constants/ResultsCardData'
import ImageComponent from '../ui/Image'

export default function ScrollContent({
  sectionsCount,
  sectionRefs
}: {
  sectionsCount: number[],
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>
}) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    imageRefs.current.forEach((imgEl, index) => {
      if (!imgEl) return

      gsap.fromTo(
        imgEl,
        {
          scale: 0.8,
          xPercent: 0,
          yPercent: 100,
          opacity: 0,
        },
        {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRefs.current[index],
            start: 'top center',
            end: 'center center',
            scrub: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [sectionRefs])

  return (
    <div className="basis-1/2">
      {sectionsCount.map((item, index) => (
        <div
          key={index}
          id={scrollSectionData[item - 1]?.name}
          ref={(el) => { sectionRefs.current[index] = el! }}
          className="h-[200vh] px-6 py-10 border-b border-gray-300 flex items-center text-primary-800 justify-start flex-col"
        >
          <div className='sticky top-20 flex flex-col justify-center items-center gap-4'>
            <div className='flex items-start justify-start w-full flex-col gap-4'>
              <p className='font-alliance text-xl'>{scrollSectionData[item - 1]?.name}</p>
              <p className="text-[14px] mb-4 font-ppMori">
                {scrollSectionData[item - 1]?.sideContent?.content}
              </p>
            </div>
            <div
              ref={(el) => { imageRefs.current[index] = el }}
              className='relative w-[70%] aspect-square overflow-hidden'
            >
              <ImageComponent
                src={scrollSectionData[item - 1]?.sideContent?.img}
                fill
                loading='lazy'
                alt={scrollSectionData[item - 1]?.name}
                className='object-cover'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
