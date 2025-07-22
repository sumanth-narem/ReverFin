import React from 'react'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

function Header() {
  return (
    <>
      <div className='px-12'>
        <div className='flex items-center justify-center flex-row border-l border-primary-500'>
          <div className='basis-1/2 size-full py-5'>
            <div className='border-y border-primary-500 pl-10 pr-5 flex items-start justify-start flex-col gap-10 py-20'>
              <div className='flex items-start justify-start flex-col gap-6'>
                <p className='font-alliance text-4xl'>Ready to Automate Your Finance Operations?</p>
                <p className='text-primary-200 font-ppMori'>Join hundreds of finance teams who&apos;ve eliminated manual work and gained real-time insights.</p>
              </div>
              <div className='flex items-start justify-start flex-row gap-4'>
                <Button
                  link='https://dev.reverfin.ai/'
                  title='Contact sales'
                  icon={<ArrowRight width={14} className='-mt-0.5' />}
                  className='bg-secondary flex items-center justify-center px-5 pt-0.5 h-[2.5rem] rounded-full text-primary-800 gap-8'
                />
                <Button
                  link='https://dev.reverfin.ai/'
                  title='Sign up'
                  // icon={<ArrowRight width={16} className='-mt-0.5'/>}
                  icon={<ArrowRight width={14} className='-mt-0.5' />}
                  className='bg-black flex items-center justify-center px-5 pt-0.5 h-[2.5rem] rounded-full text-white gap-8'
                />
              </div>
            </div>
          </div>
          <div className='basis-1/2 w-full'>
            <div className='w-full aspect-square border border-primary-500 bg-no-repeat bg-cover flex items-center justify-center' style={{ background: `url(/assets/Trail.svg)`, backgroundPosition: "center" }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header