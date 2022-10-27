import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => root.render(<App state={store} />);


rerender(store)

