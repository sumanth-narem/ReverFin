import React from 'react'
import Card from './Card'
import { resultsData } from '@/constants/ResultsCardData'

function CardsSection() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className="w-full max-w-[120rem] flex flex-wrap items-center justify-center pb-32">
          {resultsData.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <Card {...card} className={`${index < resultsData.length - 1 ? "border-l border-primary-500" : "border-x border-primary-500"}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardsSection
