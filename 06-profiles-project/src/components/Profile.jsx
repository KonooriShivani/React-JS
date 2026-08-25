import React from 'react'
import { User } from 'lucide-react';

const Profile = (props) => {
  return (
    <div className='card'>
      
        <div className='top'>
            {props.availability && (
              <button className="available">{props.availability}</button>
            )}
            <p>{props.pay}</p>
        </div>

        <div className='center'>
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <h5>{props.jobTitle}</h5>
            <h6><User size={16} color="#3fe69d" />{props.company}</h6>
            <div className ='skills'>
                <button>{props.skill1}</button>
                <button>{props.skill2}</button>
                <button>{props.skill3}</button>
                <button className='more-skills'>{props.moreSkills}</button>
            </div>
            <p>{props.intro}</p>
        </div>

        <div className="bottom">
           
            VIEW PROFILE
        </div>
      
    </div>
  )
}

export default Profile
