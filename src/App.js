import React from 'react'
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';
import Messages from './components/dialogs/Dialogs';
import {Route } from 'react-router-dom';
// import { send_message } from './Data/state';

function App(props) {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <div className='wrapperContent'>
        <Route exact path='/' render={() => <Profile profile_page={props.state.profile_page} add_post={props.add_post} newPostText={props.state.profile_page.newPostText} onPostChange={props.onPostChange}/>}/>
        <Route exact path='/profile' render={() => <Profile profile_page={props.state.profile_page} add_post={props.add_post} newPostText={props.state.profile_page.newPostText} onPostChange={props.onPostChange}/>}/>
        <Route exact path='/messages' render={() => <Messages dialogNames={props.state.dialogs_page.dialogNames} dialogMessages={props.state.dialogs_page.dialogMessages} send_message={props.send_message} onPostChange={props.onPostChange}/>}/>
      </div>
      {/* <Profile name={'Илон Маск'} status={'Илон Маск на начало 2026 года — богатейший человек в мире с состоянием, превышающим $839–852 млрд, которое резко выросло благодаря объединению SpaceX и его ИИ-стартапа xAI. Он возглавляет Tesla, SpaceX и владеет соцсетью X (ранее Twitter). Маск также известен активным участием в политической жизни США.'} livein='в основном проживает в штате Техас, США'/>
      <Message name1={'Иван Иванов'} name2={'Дональд Трамп'} name3={'Билл Гейтс'} chat1={'Привет, как дела?'} chat2={'Го завтра на марс?'} chat3={'Жду мой новый чип'}/> */}
    </div>
  );
}

export default App;
