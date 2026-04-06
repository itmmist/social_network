import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Data/state'
import {add_post} from './Data/state'
import { send_message } from './Data/state';

export let rerenderTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App state = {state} add_post = {add_post} send_message = {send_message}
    // posts_messages={posts_messages}
    // dialogNames={dialogNames}
    // dialogMessages={dialogMessages}
    />
    </React.StrictMode>
);
}
rerenderTree()

reportWebVitals();
