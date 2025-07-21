import React from 'react'
import Header from './Section'
import Feedback from './Feedback'

function Queries() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='w-full max-w-[100rem]'>
          <Header />
          <Feedback />
        </div>
      </div>
    </>
  )
}

export default Queries