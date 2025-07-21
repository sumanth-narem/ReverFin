"use client"

import React, { useState, useEffect, useRef } from 'react'
import { TimeLineData } from '@/constants/TimeLine'
import { Check } from 'lucide-react';

function TimeLine() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offset = window.innerHeight - rect.top; // or use rect.top for distance from top
        setScrollValue(offset);
        if (scrollValue > 700 && scrollValue < 1200) {
          setActiveTab(1);
        }
        else if (scrollValue > 1200 && scrollValue < 1600) {
          setActiveTab(2);
        }
        else if (scrollValue > 1600) {
          setActiveTab(3);
        }
        else {
          setActiveTab(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollValue]);

  return (
    <>
      <div ref={containerRef} className='pt-20 h-[1800px]'>
        <div className='sticky top-28 flex items-start justify-center flex-row w-full'>
          {
            TimeLineData?.map((time, key) => (
              <div key={key} className='w-full'>
                <div className='w-full flex items-center justify-center flex-col'>
                  <div
                    className={`border ${time?.content?.completed ? "border-primary-300" : "border-primary-500"} ${key === activeTab ? "bg-primary-300 text-primary-800" : "text-primary-300"} w-max rounded-xl px-3 py-1 cursor-pointer duration-500 transition-colors`}
                  >
                    <p className='font-ppMori pt-1'>{time?.title}</p>
                  </div>
                  <div className='relative w-full flex items-center justify-center mt-10'>
                    <div className='bg-primary-500 h-0.5 w-full'></div>
                    <div className='border bg-primary-800 border-primary-300 size-6 rounded-full absolute -top-[0.55rem] flex items-center justify-center'>
                      <div className={`size-2 rounded-full duration-500 transition-colors ${key === activeTab ? "bg-primary-300" : "bg-primary-800"}`}></div>
                    </div>
                  </div>
                  {/* {
                    activeTab === key && */}
                  <div className={`w-full flex items-start justify-start flex-col gap-3 mt-16 overflow-hidden ${activeTab === key ? "max-h-60" : "max-h-0"} h-60 duration-500 transition-all`}>
                    <p className='font-ppMori text-lg'>{time?.content?.heading}</p>
                    <ul className='flex items-start justify-start flex-col w-full gap-3'>
                      {time?.content?.items?.map((item, subKey) => (
                        <li key={subKey} className='text-primary-400 font-ppMori flex items-start justify-start flex-row gap-3'>
                          <div className="text-primary-100">
                            <Check width={15} />
                          </div>
                          <p className='text-sm'>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* } */}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TimeLine;
