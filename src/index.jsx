import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App'

// let data = [{
//   id:1,
//   title:"1"
// },
// {
//   id:2,
//   title:"2"
// },
// {
//   id:3,
//   title:"3"
// },
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>

);
// fetch('jian/subscriptions/recommended_collections').then(res=>res.json()).then(value=>{console.log(value)})


