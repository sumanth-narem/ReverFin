import React from 'react'
import { Integrations } from '@/constants/PlatformCapabilities'
// import ImageComponent from '../ui/Image'
import Card from './Card'

function Header() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full py-14'>
        <div className='w-full max-w-[100rem] bg-primary-100 py-12'>
          <div className=''>
            <div data-aos="fade-right" className='flex items-center md:items-start justify-start gap-4 flex-col px-[5.5rem] pb-16'>
              <p className='font-alliance text-4xl text-primary-800'>Our Integrations</p>
              <p className='font-ppMori text-base text-primary-600'>How it works text non consequatur dolor est.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full border-y border-primary-50 px-[5.5rem] relative overflow-hidden">
              {Integrations?.map((item, key) => (
                <Card
                  key={key}
                  item={item}
                  keyValue={key}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header