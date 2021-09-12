import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CardList from "./components/CardList";

const data = [
  {
    name: "PC RACE", 
    deskripsi:"JANGAN DI TANYA LAGI, UDAH LEVEL DEWA LAH POKOKNYA", 
    imageSrc: "https://www.freepnglogos.com/uploads/computer-png/computer-png-transparent-computer-images-pluspng-31.png"
  }, 
  {
    name: "XBOX RACE", 
    deskripsi:"console game dari microsoft, bagus sih punya HALO tapi masih kalah sama PS :'v", 
    imageSrc: "https://www.freepnglogos.com/uploads/xbox-png-gamepad-16.png"
  }, 
  {
    name: "PS RACE", 
    deskripsi:"PLAYSTATION STILL OF THE BEST CONSOLE GAME EVER, GOD OF WAR RAGANAROK CUK", 
    imageSrc: "https://www.freepnglogos.com/uploads/ps-4-logo/download-playstation-logos-wallpaper-1680x1050-wallpoper-23.jpg"
  },
  {
    name: "NINTENDO RACE", 
    deskripsi:"INI GAMER YANG GA MATI MATI DARI DULU", 
    imageSrc: "https://www.freepnglogos.com/uploads/nintendo-logo-png/red-nintendo-logo-transparent-vector-3.png"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
