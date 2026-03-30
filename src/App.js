import React from 'react'
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';
import Messages from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Header />
      <NavBar />
      <div className='wrapperContent'>
        <Route exact path='/' render={() => <Profile posts_messages={props.state.profile_page}/>}/>
        <Route exact path='/profile' render={() => <Profile posts_messages={props.state.profile_page} />}/>
        <Route exact path='/messages' render={() => <Messages dialogNames={props.state.dialogs_page} dialogMessages={props.state.dialogs_page} />}/>
      </div>
      {/* <Profile name={'Илон Маск'} status={'Илон Маск на начало 2026 года — богатейший человек в мире с состоянием, превышающим $839–852 млрд, которое резко выросло благодаря объединению SpaceX и его ИИ-стартапа xAI. Он возглавляет Tesla, SpaceX и владеет соцсетью X (ранее Twitter). Маск также известен активным участием в политической жизни США.'} livein='в основном проживает в штате Техас, США'/>
      <Message name1={'Иван Иванов'} name2={'Дональд Трамп'} name3={'Билл Гейтс'} chat1={'Привет, как дела?'} chat2={'Го завтра на марс?'} chat3={'Жду мой новый чип'}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
