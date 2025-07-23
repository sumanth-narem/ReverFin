import React from 'react'
import ImageComponent from '../ui/Image'

function Section() {
  return (
    <>
      <div className='flex items-center justify-center flex-col border-t border-primary-500 py-14 px-12'>
        <p data-aos="fade-up" className='font-alliance text-5xl py-14'>All-in-One Platform Capabilities</p>
        <div className='px-10'>
          <div data-aos="fade-up" className='bg-primary-500 h-max w-full p-[1px] rounded-3xl flex items-center justify-center flex-col gap-[1px]'>
            <div className='flex items-start justify-start flex-row gap-[1px] w-full'>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-1/3 h-[23rem] flex flex-col items-center justify-center'>
                <div>
                  <p className='text-xl'>Smart Transaction Controls</p>
                  <p className='text-primary-400 mt-3 text-sm'>Multi-way document matching and AI-led validation for informed, rule-based approvals</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 mt-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/SmartTransaction.svg'
                  />
                </div>
              </div>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-2/3 h-[23rem] flex flex-col items-center justify-center'>
                <div className='w-full'>
                  <p className='text-xl'>AI Document Automation</p>
                  <p className='text-primary-400 mt-3 text-sm'>Semantic AI reads, tags, verifies, and extracts insights from financial documents auto-matically.</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 mt-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/AIDocument.svg'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-start justify-start flex-row gap-[1px] w-full'>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-1/3 h-[23rem] flex flex-col items-center justify-center'>
                <div>
                  <p className='text-xl'>One-Click Approvals</p>
                  <p className='text-primary-400 mt-3 text-sm'>Simplified workflows with automated approval collation based on delegation matrices.</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 my-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/Approvals.svg'
                  />
                </div>
              </div>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-1/3 h-[23rem] flex flex-col items-center justify-center'>
                <div>
                  <p className='text-xl'>Audit-Ready Documentation</p>
                  <p className='text-primary-400 mt-3 text-sm'>Every document tracked and organized for seamless audit trails and due diligenc</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 my-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/AuditReady.svg'
                  />
                </div>
              </div>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-1/3 h-[23rem] flex flex-col items-center justify-center'>
                <div>
                  <p className='text-xl'>Intelligent Analytics</p>
                  <p className='text-primary-400 mt-3 text-sm'>Every document tracked and organized for seamless audit trails and due diligenc</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 my-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/Analytics.svg'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-start justify-start flex-row-reverse gap-[1px] w-full'>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-1/3 h-[23rem] flex flex-col items-center justify-center'>
                <div>
                  <p className='text-xl'>Intelligent Integrated Accounting</p>
                  <p className='text-primary-400 mt-3 text-sm'>Seamless integration and AI driven codification with minimal manual intervention.</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 my-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/Intelligent.svg'
                  />
                </div>
              </div>
              <div className='font-ppMori bg-primary-800 rounded-3xl p-5 basis-2/3 h-[23rem] flex flex-col items-center justify-center'>
                <div className='w-full'>
                  <p className='text-xl'>Compliance Management</p>
                  <p className='text-primary-400 mt-3 text-sm'>Automated compliance across contracts, tax, and regulatory requirements.</p>
                </div>
                <div className='w-[60%] flex-grow relative min-h-0 my-10'>
                  <ImageComponent
                    className='relative h-full w-full'
                    alt=''
                    fill
                    loading='lazy'
                    src='/assets/Capabilities/Compilance.svg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Section