import React from 'react'
import TimeLine from './TimeLine'

function Feedback() {
  return (
    <>
      <div className='pt-28 pb-24 px-12'>
        <div data-aos="fade-up" className='flex items-end justify-between'>
          <div className='basis-1/2'>
            <p className='font-alliance text-5xl'>What&apos;s Coming Next - Built with Your Feedback</p>
          </div>
          <div className='flex items-center justify-end basis-1/2 pl-32'>
            <p className='font-ppMori text-primary-400'>Lorem ipsum multi-way document matching and AI-led validation for informed, rule-based.</p>
          </div>
        </div>
        <TimeLine />
      </div>
    </>
  )
}

export default Feedback