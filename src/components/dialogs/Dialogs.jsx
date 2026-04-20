import React from 'react'
import './dialogs.css'
import Dialog_messages_item from './dialogs_item/dialogs_item'
import Message from './message/message'
let message_text = React.createRef();

function Dialogs(props){
  let send_message = () => {
    let text = message_text.current.value
    props.send_message(text)
    message_text.current.value = ''
  }
  console.log(props)
  let onPostChange = () => {
    props.onPostChange(message_text.current.value)
  }
    return(
      <div className='messages'>
        <div className='contacts'>
          {props.dialogNames.map((e) => <Dialog_messages_item name={e.name} id={e.id}/>)}
        </div>
        <div className='chats'>
          {props.dialogMessages.map((e) => <Message message={e.message} id={e.id}/>)}
        </div>

        <div className='new_message'>
          <input onChange={onPostChange} className='messages_input' ref={message_text} placeholder='введите сообщение'/>
          <button onClick={send_message} className='messages_btn'>отправить</button>
        </div>
      </div>
    )
}

export default Dialogs