/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import ContactForm from './Form'

function JoinWaitlist() {
  return (
    <>
      <div className='w-full border-x border-primary-500 pt-16 px-10'>
        <div className='py-20 grid grid-cols-2 relative'>
          <div className='relative'>
            <div className='flex items-start justify-start flex-col gap-8 sticky top-20'>
              <div className='flex items-start justify-start flex-col gap-5 pr-10'>
                <p className='text-3xl font-alliance'>Join the waitlist!</p>
                <div className='flex items-start justify-start flex-col'>
                  <p className='text-lg font-ppMori font-semibold'>Be the first to experience intelligent finance with Rever.</p>
                  <p className='font-ppMori'>We're currently onboarding early users who want to redefine how finance operates, with automation, controls, and insights built from the ground up.</p>
                </div>
              </div>
              <div className='flex items-start justify-start flex-col gap-5 pr-10'>
                <p className='font-Alliance text-3xl'>Why join?</p>
                <ul className='list-disc ml-4  font-ppMori'>
                  <li>Early access to beta features</li>
                  <li>Direct input into our roadmap</li>
                  <li>Personalized onboarding support</li>
                  <li>Exclusive invites to product roundtables</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinWaitlist