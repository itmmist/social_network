import React from "react";
import img_small from '../../../../img/img_small.jpeg'

function Post(props){
    return(
       <div className='post'>
            <img src={img_small} alt="" />
            <span>Илон Маск</span>
            <p>{props.message}</p>
            <span className="likes">{props.likes}</span>
        </div> 
    )
}

export default Post