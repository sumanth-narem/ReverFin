import React from 'react'
import ImageComponent from '../ui/Image'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

function Header() {
  return (
    <>
      <div className='pt-28 pb-24 px-12 border-b border-primary-500'>
        <div className='flex items-center justify-center flex-col gap-4 pb-12'>
          <p data-aos="fade-up" className='font-alliance text-5xl'>See Rever in Action – Try Live Queries</p>
          {/* <p data-aos="fade-up" data-aos-delay="200" className='font-ppMori text-lg text-primary-100'>Some metrics text lorem ipsum dolor sit amen</p> */}
        </div>
        <div data-aos="fade" data-aos-delay="400" className='max-h-[400px] h-[60vh] w-full border border-primary-500 bg-no-repeat bg-cover flex items-center justify-center' style={{ background: `url(/assets/Background.svg)`, backgroundPosition: "center" }}>
          <form className='border border-primary-300 rounded-2xl bg-primary-800 w-[60%] px-3 py-1 flex items-center justify-start gap-3 h-16'>
            <ImageComponent
              alt=''
              fill
              loading='lazy'
              src='/assets/LogoInput.svg'
              className='relative h-6 w-6'
            />
            <input type="text" className='bg-transparent outline-none w-full font-ppMori mt-1' placeholder='Ask Rever anything about your finances...' />
            <div>
              <button type="submit" className='bg-secondary rounded-full w-9 h-9 flex items-center justify-center'>
                <ArrowRight
                  className='text-primary-800'
                  width={16}
                />
              </button>
            </div>
          </form>
        </div>
        <div data-aos="fade" className='flex items-center justify-center mt-12'>
          <Button
            link='https://preview.reverfin.ai/'
            title='Try Live Demo'
            icon={<ArrowRight width={14} className='-mt-0.5' />}
            className='bg-secondary flex items-center justify-center px-5 pt-0.5 h-[2.5rem] w-max rounded-full text-primary-800 gap-8'
          />
        </div>
      </div>
    </>
  )
}

export default Header