
"use client"

import React, { useEffect, useRef, useState } from "react"
import { scrollSection, scrollSectionData } from "@/constants/ResultsCardData";
import { SideCard } from "./SideCard";
import ScrollContent from "./ScrollContent";

function ScrollSection() {
  const sectionsCount = [1, 2, 3, 4];
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const suppressRef = useRef(false)

  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollPercents, setScrollPercents] = useState<number[]>(
    new Array(sectionsCount.length).fill(0)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
          if (!suppressRef.current && entry.isIntersecting && index !== -1) {
            setActiveIndex(index)
          }
        })
      },
      {
        root: null,
        threshold: 0.6,
      }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const newPercents = sectionRefs.current.map((section) => {
          if (!section) return 0

          const rect = section.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const sectionHeight = rect.height

          const scrollTop = windowHeight - rect.top
          const totalScrollable = windowHeight + sectionHeight

          let percent = scrollTop / totalScrollable
          percent = Math.min(Math.max(percent, 0), 1)

          return percent
        })

        setScrollPercents(newPercents)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPercents, activeIndex])

  return (
    <div>
      {/* Main Layout */}
      <div className="flex items-start justify-start w-full py-10">
        {/* LEFT Sticky*/}
        <div className="sticky top-20 basis-1/2 h-screen border-r border-primary-50">
          <div className="flex items-start flex-col w-full gap-7">
            <div className="flex flex-row items-center justify-center w-full gap-5 px-3">
              {
                sectionsCount.map((item, index) => (
                  <div key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className={`cursor-pointer w-full duration-200`}
                    onClick={() => {
                      suppressRef.current = true
                      const target = sectionRefs.current[index]
                      if (target) {
                        const targetRect = target.getBoundingClientRect()
                        const targetOffset = targetRect.top + window.scrollY
                        const offsetInsideSection = targetRect.height * 0.20 // scroll to 42%
                        const y = targetOffset - offsetInsideSection

                        const startY = window.scrollY
                        const distance = y - startY
                        const duration = 1000
                        const startTime = performance.now()

                        const easeInOutQuad = (t: number) =>
                          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

                        const animate = (currentTime: number) => {
                          const elapsed = currentTime - startTime
                          const progress = Math.min(elapsed / duration, 1)
                          window.scrollTo(0, startY + distance * easeInOutQuad(progress))
                          if (progress < 1) {
                            requestAnimationFrame(animate)
                          }
                        }

                        requestAnimationFrame(animate)
                      }

                      setActiveIndex(index)
                      setTimeout(() => {
                        suppressRef.current = false
                      }, 1000)
                    }}
                  >
                    <div className="flex items-center justify-start">
                      <div
                        className={`flex items-center justify-center gap-2 font-ppMori
                          ${index === activeIndex ? "text-primary-800" : "text-gray-400"}
                          transition-colors duration-1000`}
                      >
                        <div
                          className={`text-sm h-12 w-12 flex items-center justify-center 
                            border-[1px]
                            ${index === activeIndex
                              ? "rounded-full border-primary-800"
                              : "rounded-[0.9rem] border-gray-400"}
                              transition-all duration-500 ease-in-out`}
                        >
                          {"0" + item}
                        </div>
                        <div>
                          {scrollSection.map((item, key) => (
                            <p key={key} className="text-sm">{item?.id === index && item?.title}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="w-full h-0.5 flex items-center justify-center flex-row rounded-full overflow-hidden">
              {sectionsCount.map((item, index) => (
                <div
                  key={index}
                  className="w-full"
                >
                  <div className="h-0.5 relative overflow-hidden w-full bg-primary-50">
                    <div
                      className="bg-primary-800 h-0.5 absolute top-0 left-0"
                      style={{
                        width: `${scrollPercents[index] < 0.30
                          ? 0
                          : scrollPercents[index] >= 0.70
                            ? 100
                            : ((scrollPercents[index] - 0.30) / (0.70 - 0.30)) * 100
                          }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="relative h-6">
            {sectionsCount.map((item, index) => {
              const percent = scrollPercents[index]
              const isVisible = percent > 0
              const isActive = index === activeIndex

              if (!isVisible && index !== 0) return null

              return (
                <li
                  key={index}
                  className={`
                    absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out
                    ${isActive ? "translate-y-0 opacity-100 z-20" : "translate-y-0 opacity-0 z-0"}
                  `}
                >
                  <SideCard
                    item={item}
                    percent={percent}
                    content={scrollSectionData[index]?.content}
                    features={scrollSectionData[index]?.features}
                  />
                </li>
              )
            })}
          </ul>
        </div>

        {/* RIGHT Sections */}
        <ScrollContent
          sectionsCount={sectionsCount}
          sectionRefs={sectionRefs}
        />
      </div>
    </div>
  )
}

export default ScrollSection

