"use client"

import React from 'react'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import BottomCard from './BottomCard'
import { bottomCards } from '@/constants/ContactSales'
import ContactForm from './Form'

function ContactSales() {
  return (
    <>
      <div className='w-full border-x border-primary-500 pt-16 px-10'>
        <div className='py-20 grid grid-cols-2 relative'>
          <div className='relative'>
            <div className='flex items-start justify-start flex-col gap-8 pr-10 sticky top-20'>
              <p className='text-3xl font-alliance'>Contact sales</p>
              <div className='flex items-start justify-start flex-col gap-7'>
                <p className='text-3xl font-alliance'>Have questions, suggestions, or need support? We&apos;re here to help.</p>
                <p className='font-ppMori'>Reach us anytime by email, phone, or simply fill out the form, and our team will get back to you promptly.</p>
              </div>
              <div>
                <p className='font-ppMori text-base'>General Enquiries</p>
                <p className='font-ppMori hover:underline duration-300 transition-all'><a href="mailto:sales@reverfin.ai">sales@reverfin.ai</a></p>
              </div>
              <div className='w-max'>
                <Button
                  link='/join-waitlist'
                  title='Join waitlist'
                  className='bg-secondary flex items-center justify-center px-3 sm:px-5 pt-0.5 h-[2rem] sm:h-[2.5rem] rounded-full text-primary-800 gap-8 text-[12px]'
                  icon={<ArrowRight width={14} className='-mt-0.5' />}
                />
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className='pb-16'>
          <div className='grid grid-cols-3 gap-10'>
            {
              bottomCards?.map((item, key) => (
                <BottomCard
                  key={key}
                  {...item}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSales