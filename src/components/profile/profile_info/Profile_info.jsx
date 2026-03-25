import React from "react";
import img_big from '../../../img/download.jpeg'

function Profile_info(props){
    return(
        <div className='me'>
          <img src={img_big} alt="" />
          <p>{props.name}</p>
          <p>{props.status}</p>
          <p>{props.livein}</p>
        </div>
    )
}

export default Profile_info