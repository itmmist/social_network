import React from "react";
import Post from "./post/Post";
let post_text = React.createRef();

function Posts(props){
  console.log(props.posts_messages)
  let add_post = () => {
    // alert(post_text.current.value)
    props.add_post(post_text.current.value)
  }
    return(
        <div className='posts'>
          <input ref={post_text} type="text" placeholder='напишите пост' value={props.newPostText}/>
          <button onClick={add_post}>добавить пост</button>
          {/* <input type="text" placeholder="" value={props.new_post-text}/> */}
          {props.posts_messages.map((e) => <Post message={e.message} id={e.id} likes={e.likes}/>)}
        </div>
    )
}

export default Posts