import React from "react";
import { NavLink } from "react-router-dom";

const Dialog_messages_item = (props) =>{
    return(
        <div className='user'>
            <NavLink className='name' to={'/messages/${props.id}'}>
              <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default Dialog_messages_item