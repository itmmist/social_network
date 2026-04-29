import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import store from "./Data/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = (state) => {
  root.render(
    <BrowserRouter>
    <App state = {state} dispatch = {store.dispatch.bind(store)}/>
    </BrowserRouter>
);
}
rerenderTree(store.getState())
store.subscribe(rerenderTree)
reportWebVitals();