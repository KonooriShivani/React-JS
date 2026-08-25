import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 flex items-center justify-between gap-10 h-[99vh] bg-white'>
       <LeftContent/>
       <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
