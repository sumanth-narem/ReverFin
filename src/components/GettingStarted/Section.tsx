'use client'

import React, { useState } from 'react'
import Hidden from './Hidden'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect Your Tools',
  },
  {
    number: '02',
    title: 'Upload & Validate',
  },
  {
    number: '03',
    title: 'Get Intelligent Results',
  },
]

function Header() {
  const [openIndex, setOpenIndex] = useState(0) // initially first item is open

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? 0 : index))
  }

  return (
    <>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='border-t border-primary-50 w-full max-w-[120rem] bg-primary-100 px-12'>
          <div className='border-x border-primary-50 py-20 h-full w-full flex items-start justify-center flex-row overflow-hidden'>
            <div className='basis-1/2 px-10 overflow-y-auto'>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`font-ppMori flex items-start justify-start flex-col border-t ${openIndex === index ? "border-primary-500" : "border-primary-50"} duration-500 transition-colors py-5`}
                >
                  <div className='flex items-center justify-start gap-5 cursor-pointer w-full' onClick={() => handleToggle(index)}>
                    <div className='flex items-center justify-center bg-primary-800 w-10 h-10 rounded-full pt-1 text-white'>
                      {step.number}
                    </div>
                    <p className='text-primary-800 pt-1'>{step.title}</p>
                  </div>
                  <div className={`overflow-y-hidden ${openIndex === index ? "h-[22rem]" : "h-0"} min-h-0 transition-all duration-500`}>
                    <Hidden />
                  </div>
                  {/* {openIndex === index && <Hidden />} */}
                </div>
              ))}
            </div>
            <div className='basis-1/2 text-primary-800 px-16 flex items-start justify-start'>
              <div className='flex items-start justify-start flex-col gap-6'>
                <p data-aos="fade-up" data-aos-delay="200" className='font-alliance text-4xl'>Getting Started Is Simple</p>
                <p data-aos="fade-up" data-aos-delay="400" className='font-ppMori text-lg text-primary-600'>
                  How it works text non consequatur hic dolor est unde reiciendis
                  laboriosam cum. Sunt at repellendus reiciendis possimus.
                </p>
                <div data-aos="fade-up" data-aos-delay="600">
                  <Button
                    title='Get a demo'
                    icon={<ArrowRight width={16} />}
                    link='#'
                    className='bg-primary-800 text-white px-6 py-3 rounded-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import Hidden from './Hidden'
// import Button from '../ui/Button'
// import { ArrowRight } from 'lucide-react'

// const steps = [
//   {
//     number: '01',
//     title: 'Connect Your Tools',
//   },
//   {
//     number: '02',
//     title: 'Upload & Validate',
//   },
//   {
//     number: '03',
//     title: 'Get Intelligent Results',
//   },
// ]

// function Header() {
//   const [visibleIndex, setVisibleIndex] = useState<number | null>(null)
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([])

//   const checkVisibility = () => {
//     const triggerPoint = window.innerHeight * 0.7 // 70% from the top (i.e., 30% from bottom)

//     stepRefs.current.forEach((ref, index) => {
//       if (!ref) return

//       const rect = ref.getBoundingClientRect()
//       const elementTop = rect.top

//       if (elementTop <= triggerPoint && elementTop + rect.height > 0) {
//         setVisibleIndex(index)
//       }
//     })
//   }


//   useEffect(() => {
//     const handleScroll = () => {
//       checkVisibility()
//     }

//     window.addEventListener('scroll', handleScroll)
//     checkVisibility()

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className='flex items-center justify-center flex-col w-full'>
//       <div className='border-t border-primary-50 w-full max-w-[120rem] bg-primary-100 px-12'>
//         <div className='border-x border-primary-50 py-20 h-[100rem] w-full flex items-start justify-center flex-row'>

//           {/* LEFT COLUMN */}
//           <div className='basis-1/2 px-10 overflow-y-auto sticky top-32'>
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className='font-ppMori flex items-start justify-start flex-col border-t border-primary-50 py-5'
//               >
//                 <div className='flex items-center justify-start gap-5'>
//                   <div className='flex items-center justify-center bg-primary-800 w-10 h-10 rounded-full pt-1 text-white'>
//                     {step.number}
//                   </div>
//                   <p className='text-primary-800 pt-1'>{step.title}</p>
//                 </div>

//                 <div
//                   ref={(el) => { (stepRefs.current[index] = el) }}
//                   className={`overflow-y-hidden transition-all duration-1000 min-h-0 ${visibleIndex === index ? 'h-[22rem] mt-4' : 'h-0'
//                     }`}
//                 >
//                   <Hidden />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className='basis-1/2 text-primary-800 px-16 flex items-start justify-start sticky top-32'>
//             <div className='flex items-start justify-start flex-col gap-6'>
//               <p className='font-alliance text-4xl'>Getting Started Is Simple</p>
//               <p className='font-ppMori text-lg text-primary-600'>
//                 How it works text non consequatur hic dolor est unde reiciendis
//                 laboriosam cum. Sunt at repellendus reiciendis possimus.
//               </p>
//               <div>
//                 <Button
//                   title='Get a demo'
//                   icon={<ArrowRight width={16} />}
//                   link='#'
//                   className='bg-primary-800 text-white px-6 py-3 rounded-full'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Extra spacer for scroll */}
//     </div>
//   )
// }

// export default Header
// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import Hidden from './Hidden'
// import Button from '../ui/Button'
// import { ArrowRight } from 'lucide-react'

// const steps = [
//   {
//     number: '01',
//     title: 'Connect Your Tools',
//   },
//   {
//     number: '02',
//     title: 'Upload & Validate',
//   },
//   {
//     number: '03',
//     title: 'Get Intelligent Results',
//   },
// ]

// function Header() {
//   const [visibleIndex, setVisibleIndex] = useState<number | null>(null)
//   const [scrollPercent, setScrollPercent] = useState(0)

//   const containerRef = useRef<HTMLDivElement | null>(null)
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([])

//   const handleContainerScroll = () => {
//     if (!containerRef.current) return

//     const container = containerRef.current
//     const scrollTop = container.scrollTop
//     const scrollHeight = container.scrollHeight - container.clientHeight

//     if (scrollHeight <= 0) {
//       setScrollPercent(0)
//       return
//     }

//     const percent = (scrollTop / scrollHeight) * 100
//     setScrollPercent(percent)

//     // Show/hide steps based on percent
//     if (percent < 30) {
//       setVisibleIndex(0)
//     } else if (percent >= 30 && percent < 60) {
//       setVisibleIndex(1)
//     } else if (percent >= 60 && percent < 90) {
//       setVisibleIndex(2)
//     } else {
//       setVisibleIndex(null)
//     }
//   }


//   useEffect(() => {
//     const container = containerRef.current
//     if (!container) return

//     container.addEventListener('scroll', handleContainerScroll)
//     handleContainerScroll() // initial trigger

//     return () => {
//       container.removeEventListener('scroll', handleContainerScroll)
//     }
//   }, [])

//   return (
//     <div className='flex items-center justify-center flex-col w-full'>
//       <div className='border-t border-primary-50 w-full max-w-[120rem] bg-primary-100 px-12'>
//         <div ref={containerRef} className='border-x border-primary-50 py-20 h-[150vh] w-full flex items-start justify-center flex-row'>

//           {/* LEFT COLUMN */}
//           <div
//             className='basis-1/2 px-10 overflow-y-auto sticky top-32'
//           >
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 ref={(el) => {
//                   stepRefs.current[index] = el
//                 }}
//                 className='font-ppMori flex items-start justify-start flex-col border-t border-primary-50 py-5'
//               >
//                 <div className='flex items-center justify-start gap-5'>
//                   <div className='flex items-center justify-center bg-primary-800 w-10 h-10 rounded-full pt-1 text-white'>
//                     {step.number}
//                   </div>
//                   <p className='text-primary-800 pt-1'>{step.title}</p>
//                 </div>

//                 <div
//                   className={`overflow-y-hidden transition-all duration-1000 min-h-0 ${visibleIndex === index ? 'h-[22rem] mt-4' : 'h-0'
//                     }`}
//                 >
//                   <Hidden />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className='basis-1/2 text-primary-800 px-16 flex items-start justify-start sticky top-32'>
//             <div className='flex items-start justify-start flex-col gap-6'>
//               <p className='font-alliance text-4xl'>Getting Started Is Simple</p>
//               <p className='font-ppMori text-lg text-primary-600'>
//                 How it works text non consequatur hic dolor est unde reiciendis
//                 laboriosam cum. Sunt at repellendus reiciendis possimus.
//               </p>
//               <div>
//                 <Button
//                   title='Get a demo'
//                   icon={<ArrowRight width={16} />}
//                   link='#'
//                   className='bg-primary-800 text-white px-6 py-3 rounded-full'
//                 />
//               </div>
//               {/* Optional scroll percentage indicator */}
//               <p className='text-sm text-primary-500'>Scroll: {scrollPercent.toFixed(1)}%</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header
