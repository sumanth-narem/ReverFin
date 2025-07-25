'use client'

import React, { useEffect, useRef, useState } from 'react'
import Hidden from './Hidden'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect Your Tools',
  },
  {
    number: '02',
    title: 'Upload & Validate',
  },
  {
    number: '03',
    title: 'Get Intelligent Results',
  },
]

function Header() {

  const [activeTab, setActiveTab] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        setScrollValue(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollValue > 800 && scrollValue < 1200) {
      if (activeTab !== 1) {
        setActiveTab(1);
      }
    } else if (scrollValue > 1200) {
      if (activeTab !== 2) {
        setActiveTab(2);
      }
    } else {
      if (activeTab !== 0) {
        setActiveTab(0);
      }
    }
  }, [scrollValue, activeTab]);

  return (
    <>
      <div ref={containerRef} className='h-[1700px]'>
        <div className='sticky top-0 flex items-center justify-center flex-col w-full '>
          <div className='border-t border-primary-50 w-full max-w-[100rem] bg-primary-100'>
            <div className='py-20 h-full w-full flex items-start justify-center flex-row overflow-hidden'>
              <div className='basis-1/2 px-10 overflow-y-auto'>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`font-ppMori flex items-start justify-start flex-col border-t ${activeTab === index ? "border-primary-500" : "border-primary-50"} duration-500 transition-colors py-3`}
                  >
                    <div className='flex items-center justify-start gap-5 cursor-pointer w-full'>
                      <div className='flex items-center justify-center bg-primary-800 w-10 h-10 rounded-full pt-1 text-white'>
                        {step.number}
                      </div>
                      <p className='text-primary-800 pt-1'>{step.title}</p>
                    </div>
                    <div className={`overflow-y-hidden ${activeTab === index ? "h-[22rem]" : "h-0"} min-h-0 transition-all duration-500`}>
                      <Hidden index={index} />
                    </div>
                    {/* {openIndex === index && <Hidden />} */}
                  </div>
                ))}
              </div>
              <div className='basis-1/2 text-primary-800 px-16 flex items-start justify-start'>
                <div className='flex items-start justify-start flex-col gap-6'>
                  <p data-aos="fade-up" data-aos-delay="200" className='font-alliance text-4xl'>Getting Started Is Simple</p>
                  <p data-aos="fade-up" data-aos-delay="400" className='font-ppMori text-primary-600'>
                    How it works text non consequatur hic dolor est unde reiciendis
                    laboriosam cum. Sunt at repellendus reiciendis possimus.
                  </p>
                  <div data-aos="fade-up" data-aos-delay="600">
                    <Button
                      title='Book a demo'
                      icon={<ArrowRight width={14} />}
                      link='https://cal.com/rever-sales/talk-to-us'
                      className='bg-primary-800 text-white px-5 pt-0.5 h-[2.5rem] rounded-full flex items-center justify-center'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
