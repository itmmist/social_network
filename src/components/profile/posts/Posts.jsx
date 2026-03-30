import React from "react";
import Post from "./post/Post";

function Posts(props){
    return(
        <div className='posts'>
          <input type="text" placeholder='напишите пост'/>
          <button>добавить пост</button>
          {props.posts_messages.map((e) => <Post message={e.message} id={e.id} likes={e.likes}/>)}
        </div>
    )
}

export default Posts