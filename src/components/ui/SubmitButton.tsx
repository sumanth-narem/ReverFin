import { SubmitButtonPropsType } from '@/types/types'
import React from 'react'

function SubmitButton({ handleSubmit, title, className, icon, disable }: SubmitButtonPropsType) {
  return (
    <>
      <button
        title={title}
        disabled={disable}
        className={`font-ppMori rounded-full`}
        onSubmit={handleSubmit}
      >
        <div className={`${className}`}>
          <div className={`flex items-center justify-center text-[12px] sm:text-sm flex-row ${icon ? "gap-2.5" : "gap-0"}`}>
            {title}
            {icon}
          </div>
        </div>
      </button>
    </>
  )
}

export default SubmitButton