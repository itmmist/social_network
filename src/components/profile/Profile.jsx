import React from 'react'
import './profile.css'
import img_big from '../../img/download.jpeg'
import img_small from '../../img/img_small.jpeg'

function Profile(){
    return(
      <div className='profile'>
        <div className='me'>
          <img src={img_big} alt="" />
          <p>Илон Маск</p>
        </div>
        <div className='posts'>
          <input type="text" placeholder='напишите пост'/>
          <button>добавить пост</button>
          <div className='post'>
            <img src={img_small} alt="" />
            <span>Илон Маск</span>
            <p>какой-нибудь текст</p>
          </div>
        </div>
      </div>
    )
}

export default Profile