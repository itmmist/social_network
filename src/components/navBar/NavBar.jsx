import React from 'react'
import './navBar.css'
import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
      <div className='navBar'>
        {/* <a href="">Профиль</a>
        <a href="">Сообщение</a>
        <a href="">Пользователи</a> */}
        <NavLink to='/profile'>Профиль</NavLink>
        <NavLink to='/messages'>Сообщения</NavLink>
        {/* <NavLink to='/users'></NavLink> */}
      </div>
    )
}

export default NavBar