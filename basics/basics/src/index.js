import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Add from './components/add';
import ListDemo from './components/listDemo';
import ObjectMaping from './components/ObjectMaping';
import PropsDemo from './components/PropsDemo';
import ConditionalRender from './components/ConditionalRender';
import EventDemo from './components/EventDemo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App />
    <Add />
    <ListDemo />
    <ObjectMaping/> */}
    {/* <PropsDemo /> */}
    {/* <ConditionalRender/> */}
    {/* <EventDemo/> */}
    

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
