import React from 'react'
import './messages.css'

function Messages(props){
    return(
      <div className='messages'>
        <div className='contacts'>
          <p>{props.name1}</p>
          <p>{props.name2}</p>
          <p>{props.name3}</p>
        </div>
        <hr />
        <div className='chat'>
          <p>{props.chat1}</p>
          <p>{props.chat2}</p>
          <p>{props.chat3}</p>
          <input className='input' type="text" placeholder='Введите сообщение'/>
          <button className='btn'>send</button>
        </div>
        
      </div>
    )
}

export default Messages