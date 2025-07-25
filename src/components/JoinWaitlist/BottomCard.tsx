"use client"

import { BottomCardType } from '@/types/types'
import React from 'react'

function BottomCard(data: BottomCardType) {
    return (
        <>
            <div className='font-ppMori text-[14px] text-primary-400'>
                <p className='text-lg text-white mb-4'>{data?.heading}</p>
                <p>{data?.content}</p>
                <p>{data?.subHeading}</p>
                <p>{data?.address}</p>
            </div>
        </>
    )
}

export default BottomCard