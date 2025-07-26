import { BlogsData } from '@/constants/Blogspage/BlogData'
import React from 'react'
import ImageComponent from '../ui/Image'
import Card from './Card'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function Header() {
  return (
    <>
      <div className='w-full flex items-center justify-center flex-col pt-16'>
        <div className='w-full max-w-[100rem] px-12'>
          <div className='px-10 xl:px-16 py-20 border-x border-b border-primary-500'>
            <div>
              <p className='font-alliance text-4xl'>The Rever blogs</p>
            </div>
            <div className='mt-12'>
              <Link target='_blank' href={"/blog/enterprise-guide-to-three-way-matching"} className='grid grid-cols-3 group cursor-pointer'>
                <div className='aspect-square p-4 rounded-3xl border border-primary-500 col-span-1 group-hover:bg-primary-500 group-hover:border-secondary duration-500 transition-all'>
                  <div className='h-full overflow-hidden rounded-3xl'>
                    <ImageComponent
                      src={BlogsData[1]?.img}
                      alt={BlogsData[0]?.title}
                      fill
                      loading='lazy'
                      className='relative w-full h-full duration-500 transition-all'
                    />
                  </div>
                </div>
                <div className='col-span-2 p-5 rounded-3xl border border-primary-500 group-hover:bg-primary-500 group-hover:border-secondary duration-500 transition-all'>
                  <div className='font-ppMori text-[12px] border border-primary-400 rounded-full px-3 py-1 w-max bg-primary-800'>
                    <p className='mt-0.5'>{BlogsData[0]?.tag}</p>
                  </div>
                  <div className='flex items-start justify-start flex-col gap-4 mt-4'>
                    <p className='font-alliance text-2xl'>{BlogsData[0]?.title}</p>
                    <p className='font-ppMori text-sm text-primary-400'>{BlogsData[0]?.summary}</p>
                    <p className='font-ppMori text-[12px] text-primary-400'>{BlogsData[0]?.date} | {BlogsData[0]?.read_time}</p>
                  </div>
                </div>
              </Link>
              <div className='grid grid-cols-3'>
                {
                  BlogsData?.map((item, key) =>
                    key !== 0 ? (
                      <Card key={key} {...item} />
                    ) : null
                  )
                }
              </div>
              <div className='flex items-center justify-center flex-row gap-4 pt-12'>
                <Button
                  link='/contact-sales'
                  title='Contact sales'
                  icon={<ArrowRight width={14} className='-mt-0.5' />}
                  className='bg-secondary flex items-center justify-center px-5 pt-0.5 h-[2.5rem] rounded-full text-primary-800 gap-8'
                />
                <Button
                  link='https://app.reverfin.ai/'
                  title='Sign up'
                  // icon={<ArrowRight width={16} className='-mt-0.5'/>}
                  icon={<ArrowRight width={14} className='-mt-0.5' />}
                  className='bg-black flex items-center justify-center px-5 pt-0.5 h-[2.5rem] rounded-full text-white gap-8'
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