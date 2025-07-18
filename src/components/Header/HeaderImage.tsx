import React from 'react'
import ImageComponent from '../ui/Image'
import MarqueeComponent from './MarqueeComponent'

function HeaderImage() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='w-full max-w-[120rem] px-12'>
          <div className='max-h-[800px] h-[80vh] border border-primary-500 bg-no-repeat bg-cover flex items-center justify-center' style={{ background: `url(/assets/Background.svg)`, backgroundPosition: "center" }}>
            <div data-aos="fade-up" data-aos-delay="800" className='w-[90%] h-[80%]'>
              <ImageComponent
                src='/assets/Header.svg'
                fill
                loading='lazy'
                alt='Product Image'
                className='w-full h-full relative'
              />
            </div>
          </div>
          <div className='h-32 border border-primary-500 border-b-0 flex items-center justify-center text-primary-100 text-lg'>
            <p data-aos="fade-up">Trusted by growing businesses and finance teams worldwide</p>
          </div>
        </div>
        <div className='w-full max-w-[120rem] border-y border-primary-500 px-12'>
          <div data-aos="fade" className='border-x border-primary-500'>
            <MarqueeComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderImage