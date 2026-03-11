import React from 'react'
import './profile.css'
import img_big from '../../img/download.jpeg'
import Posts from './posts/Posts'

function Profile(props){
    return(
      <div className='profile'>
        <div className='me'>
          <img src={img_big} alt="" />
          <p>{props.name}</p>
        </div>
        <Posts message={props.message}/>
      </div>
    )
}

export default Profile