import React from 'react'
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <Profile name={'Илон Маск'}/>
    </div>
  );
}

export default App;
