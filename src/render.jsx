import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './Data/state'
import {add_post} from './Data/state'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { send_message } from './Data/state';
import { onPostChange } from './Data/state';

export let rerenderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
    <App state = {state} add_post = {add_post} send_message = {send_message} onPostChange = {onPostChange}
    // posts_messages={posts_messages}
    // dialogNames={dialogNames}
    // dialogMessages={dialogMessages}
    />
    </BrowserRouter>
);
}
rerenderTree()

reportWebVitals();
