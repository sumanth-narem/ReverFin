'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollContent({ sectionsCount, sectionRefs }: { sectionsCount: number[], sectionRefs: React.RefObject<(HTMLDivElement | null)[]> }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    sectionRefs.current.forEach((el, index) => {
      if (!el) return

      gsap.fromTo(
        el,
        {
          scale: 0.7,
          left: 20,
          opacity: 0.5,
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 0%',
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
          ref={(el) => { sectionRefs.current[index] = el! }}
          className="h-[80vh] px-6 py-10 border-b border-gray-300 flex items-center text-primary-800 justify-center flex-col"
        >
          <h2 className="text-xl font-bold mb-4">Section {item}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            numquam optio! Earum quod alias saepe cum officiis corrupti ea
            quae, ut debitis illo, dolores architecto exercitationem vero
            tenetur nostrum iste dolorem, dicta velit tempore repudiandae...
          </p>
        </div>
      ))}
    </div>
  )
}
