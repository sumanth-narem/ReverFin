import React from 'react'

function Header() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='max-w-[120rem] w-full flex items-center justify-center flex-col gap-5 py-32 border-b border-primary-500'>
          <p data-aos="fade-up" className='font-alliance text-5xl'>Proven Results in Action</p>
          <p data-aos="fade-up" data-aos-delay="200" className='font-ppMori text-primary-100'>Some metrics text lorem ipsum dolor sit amen</p>
        </div>
      </div>
    </>
  )
}

export default Header