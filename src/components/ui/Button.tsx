import { ButtonPropsType } from '@/types/types'
import Link from 'next/link'
import React from 'react'

function Button({ link, title, className, icon }: ButtonPropsType) {
  return (
    <>
      <Link
        href={link}
        title={title}
        className={`font-ppMori rounded-full`}
        target='_blank'
      >
        <div className={`${className}`}>
          <div className={`flex items-center justify-center text-sm flex-row ${icon ? "gap-2.5" : "gap-0"}`}>
            {title}
            {icon}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Button