import React from 'react'
import Button from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'

function Header() {
  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <div className='w-full max-w-[100rem] pt-16'>
          <div className='px-5 sm:px-8 lg:px-12 h-full w-full border-t border-primary-500'>
            <div className='h-full w-full py-28 2xl:py-36 border-x border-primary-500 flex items-center justify-center flex-col gap-10'>
              <div className='flex items-center justify-center flex-col gap-2 px-3'>
                <p data-aos="fade-up" data-aos-delay="400" className='font-alliance text-3xl sm:text-4xl lg:text-5xl text-center'>Modern AI Assistant for Finance</p>
                <p data-aos="fade-up" data-aos-delay="600" className='font-ppMori font-extralight text-primary-100 text-sm text-center'>Audits Everything. Automates the Clerical.  Delivers Valuable Insight.</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="800" className='flex items-center justify-center gap-4 md:gap-7'>
                <Button
                  link='https://preview.reverfin.ai/'
                  title='Get a demo'
                  icon={<ArrowRight width={14} className='-mt-0.5' />}
                  className='bg-secondary flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-primary-800 gap-8 text-[12px]'
                />
                <Button
                  link='https://preview.reverfin.ai/'
                  title='Watch demo'
                  // icon={<ArrowRight width={16} className='-mt-0.5'/>}
                  icon={<Play width={12} className='-mt-0.5' />}
                  className='bg-black flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-white gap-8'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header