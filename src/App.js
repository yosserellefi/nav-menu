import React from 'react';
import './App.css';
import Navmennu from './nav-menu'


const nav = [
  {title : "About Us"},
  {title : "Career"},
  {title : "Departemenet", tab : [
    "Marketing",
    "Costomer ",
    "finance"
  ]},
]


function App() {
  return (
    
    <Navmennu navBar={nav} />
  );
}

export default App;

