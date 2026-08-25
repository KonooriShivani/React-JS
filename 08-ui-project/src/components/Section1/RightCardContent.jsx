import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semi-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div className='flex flex-col gap-2'>
                <p className='text-lg leading-normal text-white mb-6'>{props.intro}</p>
                <div className='flex items-center gap-2 justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-8 py-3 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-2 py-2 rounded-4xl'><ArrowRight size={30} /></button>
                </div>
            </div>
        </div>
    
  )
}

export default RightCardContent
