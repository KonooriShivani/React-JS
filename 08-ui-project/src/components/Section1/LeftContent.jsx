import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full w-1/4 bg-white flex justify-between flex-col p-4'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent
