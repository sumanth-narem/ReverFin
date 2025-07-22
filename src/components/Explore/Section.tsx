import React from 'react'
import { BlogsData } from '@/constants/Blogs'
import ImageComponent from '../ui/Image'
import Button from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';

function Section() {
  return (
    <>
      <div className='w-full flex items-center justify-center flex-col pt-28 pb-24'>
        <div data-aos="fade-up" className='flex items-end justify-between px-12'>
          <div className='basis-1/2 pr-32'>
            <p className='font-alliance text-3xl sm:text-4xl lg:text-4xl text-left text-primary-800'>Learn, Explore, Stay Informed</p>
          </div>
          <div className='flex items-center justify-end basis-1/2'>
            <p className='font-ppMori text-primary-800'>How it works text non consequatur hic dolor est unde reiciendis laboriosam cum. Sunt at repellendus reiciendis possimus.</p>
          </div>
        </div>
        <div className='w-full border-y border-primary-50 mt-12 px-12'>
          <div className="grid grid-cols-2">
            <div className='border-x border-primary-50 p-3 flex items-start justify-start w-full flex-col gap-4'>
              <div className='relative overflow-hidden rounded-xl w-full'>
                {
                  <ImageComponent
                    src={BlogsData[0]?.img}
                    alt={BlogsData[0]?.title}
                    fill
                    loading='lazy'
                    className='relative h-full w-full aspect-video'
                  />
                }
              </div>
              <div className='font-ppMori flex items-start justify-start flex-col gap-3'>
                <p className='text-[#355159] text-[8px] uppercase'>{BlogsData[0]?.type}</p>
                <p className='text-xl text-primary-800'>{BlogsData[0]?.title}</p>
                <p className='text-primary-500 text-sm'>{BlogsData[0]?.description}</p>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              {
                BlogsData?.map((item, key) => {
                  if (key !== 0) {
                    return (
                      <div key={key} className='border-x border-primary-50 p-3 flex items-start justify-start w-full flex-col gap-4 border-t'>
                        <div className='overflow-hidden rounded-xl w-full'>
                          <ImageComponent
                            src={item?.img}
                            fill
                            loading='lazy'
                            alt=''
                            className='relative h-full w-full aspect-video'
                          />
                        </div>
                        <div className='font-ppMori flex items-start justify-start flex-col gap-3'>
                          <p className='text-[#355159] text-[8px] uppercase'>{item?.type}</p>
                          <p className='text-primary-500 text-sm'>{item?.title}</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })
              }
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <Button
            link='/'
            title='Read more'
            // icon={<ArrowRight width={16} className='-mt-0.5'/>}
            icon={<ArrowRight width={14} className='-mt-0.5' />}
            className='bg-black flex items-center justify-center px-5 pt-0.5 h-[2.5rem] rounded-full text-white gap-8'
          />
        </div>
      </div>
    </>
  )
}

export default Section