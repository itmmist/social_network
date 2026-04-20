import React from 'react'
import './profile.css'
import Posts from './posts/Posts'
import Profile_info from './profile_info/Profile_info'

function Profile(props){
    return(
      <div className='profile'>
        <Profile_info />
        <Posts posts_messages={props.profile_page.posts_messages} add_post={props.add_post} newPostText={props.newPostText} onPostChange = {props.onPostChange}/>
      </div>
    )
}

export default Profile