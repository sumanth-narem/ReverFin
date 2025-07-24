import ContactSales from '@/components/ContactSales'
import React from 'react'

function page() {
  return (
    <>
      <div className='w-full flex items-center justify-center flex-col'>
        <div className='w-full max-w-[100rem] px-12'>
          <ContactSales />
        </div>
      </div>
    </>
  )
}

export default page