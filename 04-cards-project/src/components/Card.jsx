import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  
  
  return (
    <div className='card'>
    
            <div>
    
              <div className='top'>
                <img src={props.brandLogo} alt=''></img>
                <button>Save <Bookmark size={14} color="#969696"/></button>
              </div>
    
              <div className="center">
                <h3>{props.company} <span>{props.date}</span></h3>
                <h2>{props.post}</h2>
    
                <div className='tag'>
                  <p>{props.tag1}</p>
                  <p>{props.tag2}</p>
                </div>
              </div>
            </div>
    
            <div className="bottom">
              <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>
              <button>Apply now</button>
            </div>
           </div>

    
  )
}

export default Card
