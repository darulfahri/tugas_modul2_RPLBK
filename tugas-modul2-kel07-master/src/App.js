import React, { Component } from 'react';
import Info from './components/info';

export default class App extends Component {
  render() {
    const pemilik = [
      {
        name: 'Darul Fahri',
        nomor: '6666666xxx',
        nim: '21120118120007',
      },
      {
        name: 'Muhammad faza I',
        nomor: '55555555x',
        nim: '21120118140083',
      },
    ];

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <br></br>
          <br></br>
          <h1 className="font-bold text-3xl center"><center>Kelompok 07 Tugas MODUL 2</center></h1>
          <h2 className="font-bold text-3xl">duo gabisa ngoding, bisa nya ngegame jadi ayo yang mana game race kamu :3</h2>
          <div className="">
            {pemilik.map((test) => {
              return <Info name={test.name} nomor={test.nomor} nim={test.nim} />;
            })}
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

