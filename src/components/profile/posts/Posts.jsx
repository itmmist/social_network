import React from "react";
import Post from "./post/Post";


function Posts(){
    return(
        <div className='posts'>
          <input type="text" placeholder='напишите пост'/>
          <button>добавить пост</button>
          <Post message='привет'/>
          <Post message='как дела?'/>
          <Post message='чем занимаешься?'/>
        </div>
    )
}

export default Posts