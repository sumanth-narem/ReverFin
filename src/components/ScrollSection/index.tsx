import React from 'react'
import ScrollSection from './ScrollSection'

function index() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='bg-primary-100 w-full max-w-[120rem] px-12'>
          <div className=' border border-primary-50 border-b-0 pt-10 px-7'>
            <ScrollSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default index