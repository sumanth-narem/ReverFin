import React from 'react'
import Header from './Section'
import CardsSection from './CardsSection'

function Results() {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='w-full max-w-[100rem]'>
          <Header />
          <CardsSection />
        </div>
      </div >
    </>
  )
}

export default Results