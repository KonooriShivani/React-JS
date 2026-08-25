import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    
      <div className='h-full w-80 shrink-0 overflow-hidden relative bg-amber-100 rounded-4xl'>
        <img className='h-full w-full object-cover brightness-70' src={props.img}></img>
        <RightCardContent id={props.id} intro={props.intro} color={props.color} tag={props.tag}/>
      </div>
    
  )
}

export default RightCard
