import react from "react";
import { NavLink } from "react-router-dom";

function Message(props){
    return(
        <div className="chat">
            <p>{props.message}</p>
        </div>
    )
}

export default Message