import React from 'react';
import './App.css';
import Header from './assets/Header/Header';
import GreenThing from './assets/GreenThing/GreenThing';
import Progress from './assets/Progress/Progress';
import ImgThing from './assets/ImgThing/ImgThing';


function App() {
  return (
    <div className="App">
      <Header/>
      <Progress/>
      <GreenThing />
      <ImgThing/>
      
     
    </div>
  );
}

export default App;