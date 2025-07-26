"use client"

import { SideContentItem } from '@/types/types'
import React from 'react'

function SideBar({ content }: { content: SideContentItem[] }) {
  return (
    <>
      <ul className='flex flex-col gap-3'>
        {
          content.length > 0 && content?.map((item, key) => (
            <li key={key} className='cursor-pointer flex items-start justify-start gap-1 font-ppMori text-sm text-primary-100'>
              {key + 1 + "."}
              <p onClick={item?.onClick}>{item?.title}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default SideBar