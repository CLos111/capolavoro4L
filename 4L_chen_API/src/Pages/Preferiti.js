import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";

const Preferiti = () => {
  // Recupera i preferiti dal localStorage
  const [listlib, setListLib] = useState([]);

  useEffect(() => {
    const magPreferiti = JSON.parse(localStorage.getItem("preferiti")) || [];
    setListLib(magPreferiti);
  }, []);

  console.log(listlib)

  const rimuoviPreferito = (index) => {
    const nuoviPreferiti = [...listlib];
    nuoviPreferiti.splice(index, 1);
    setListLib(nuoviPreferiti);
    localStorage.setItem("preferiti", JSON.stringify(nuoviPreferiti));
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        {/* Verifica se listlib è definito e non vuoto prima di chiamare map */}
        {listlib && listlib.length > 0 && listlib.map((item, index) => {
          let immagine = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          if (immagine) {
            return (
              <div key={index} className="card" onClick={() => rimuoviPreferito(index)}>
                <img src={immagine} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                </div>
              </div>
            );
          }
          // Aggiungi un return null per gestire il caso in cui l'elemento non abbia un'immagine o un prezzo
          return null;
        })}
      </div>
    </div>
  );
};

export default Preferiti;
