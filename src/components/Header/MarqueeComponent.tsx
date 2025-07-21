import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqueeChild from './MarqueeChild'

function MarqueeComponent() {
  return (
    <>
      <Marquee className='h-20 overflow-y-hidden' autoFill speed={75}>
        <MarqueeChild
          image='/assets/businessAndFinance/BOA.svg'
          title='BankOfAmerica'
        />
        <MarqueeChild
          image='/assets/businessAndFinance/HubSpot.svg'
          title='HubSpot'
        />
        <MarqueeChild
          image='/assets/businessAndFinance/QB.svg'
          title='QB'
        />
        <MarqueeChild
          image='/assets/businessAndFinance/Ramp.svg'
          title='Ramp'
        />
        <MarqueeChild
          image='/assets/businessAndFinance/WellsFargo.svg'
          title='WellsFargo'
        />
        <MarqueeChild
          image='/assets/businessAndFinance/Workday.svg'
          title='Workday'
        />
      </Marquee>
    </>
  )
}

export default MarqueeComponent