import React from 'react'
import './dialogs.css'
import Dialog_messages_item from './dialogs_item/dialogs_item'
import Message from './message/message'
let message_text = React.createRef();

function Dialogs(props){
  let send_message = () => {
    props.dispath({type : 'SEND-MESSAGE'})
  }
  let onMessageChange = () => {
    let text = message_text.current.value
    props.dispath({type : 'UPDATE-NEWMESSAGETEXT', new_text : text})
  }
    return(
      <div className='messages'>
        <div className='contacts'>
          {props.dialogPage.dialogNames.map((e) => <Dialog_messages_item name={e.name} key={e.id} id={e.id}/>)}
        </div>
        <div className='chats'>
          {props.dialogPage.dialogMessages.map((e) => <Message message={e.message} key={e.id} id={e.id}/>)}
        </div>

        <div className='new_message'>
          <input onChange={onMessageChange} className='messages_input' ref={message_text} placeholder='введите сообщение'/>
          <button onClick={send_message} className='messages_btn'>отправить</button>
        </div>
      </div>
    )
}

export default Dialogs