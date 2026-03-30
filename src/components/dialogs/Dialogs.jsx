import React from 'react'
import './dialogs.css'
import Dialog_messages_item from './dialogs_item/dialogs_item'
import Message from './message/message'


function Messages(props){
    return(
      <div className='messages'>
        <div className='contacts'>
          {props.dialogs_page.dialogNames.map((e) => <Dialog_messages_item name={e.name} id={e.id}/>)}
        </div>
        <div className='chats'>
          {props.dialogs_page.dialogMessages.map((e) => <Message message={e.message} id={e.id}/>)}
        </div>
        {/* <div className='contacts'>
          <Dialog_messages_item id={dialogNames[0].id} name={dialogNames[0].name}/>
          <Dialog_messages_item id={dialogNames[1].id} name={dialogNames[1].name}/>
          <Dialog_messages_item id={dialogNames[2].id} name={dialogNames[2].name}/>
        </div>
        <div className='chats'>
          <Message message={dialogMessages[0].message} id={dialogMessages[0].id}/>
          <Message message={dialogMessages[1].message} id={dialogMessages[1].id} />
          <Message message={dialogMessages[2].message} id={dialogMessages[2].id} />
        </div>
        <div className='container_form'>
          <input className='input' type="text" placeholder='Введите сообщение'/>
          <button className='btn'>send</button>
        </div> */}
        
      </div>
    )
}

export default Messages