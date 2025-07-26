"use client"

import { ContentBlock } from '@/types/types'
import React from 'react'

function ScrollSection({ content }: { content: ContentBlock[] }) {
  return (
    <>
      <div className='font-ppMori flex items-start justify-start flex-col'>
        {
          content?.map((item, key) => (
            <div key={key} id={item?.id} className='pt-5'>
              <p className={`text-[1.7rem] font-alliance ${item?.heading && "pt-7"}`}>{item?.heading}</p>
              <div>
                {
                  item?.body?.map((bodyItem, bodyKey) => (
                    <div key={bodyKey}>
                      <p className={`text-xl font-alliance ${bodyItem?.subHeading ? "pb-4 pt-3" : "pt-3"}`}>{bodyItem?.subHeading}</p>
                      <div className='text-sm text-primary-100 pb-2'>
                        {bodyItem?.body}
                      </div>
                      <ul className={`list-${bodyItem?.listType} list-inside`}>
                        {
                          bodyItem?.content?.map((contentItem, contentKey) => (
                            <li key={contentKey} className={`text-sm text-primary-100 pb-3 ${bodyItem?.listType ? "pb-2" : " pb-7"}`}>{contentItem}</li>
                          ))
                        }
                      </ul>
                      <div>
                        {
                          bodyItem?.footer?.map((footerItem, footerKey) => (
                            <p key={footerKey} className='text-sm text-primary-100 pb-1'>{footerItem}</p>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ScrollSection