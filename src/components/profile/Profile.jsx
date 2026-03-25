import React from 'react'
import './profile.css'
import Posts from './posts/Posts'
import Profile_info from './profile_info/Profile_info'

function Profile(props){
    return(
      <div className='profile'>
        <Profile_info />
        <Posts message={props.message}/>
      </div>
    )
}

export default Profile