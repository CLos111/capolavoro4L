import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../Components/style.css";
import Navbar from "../Components/Navbar";

const Main = () => {
    const [ricerca, setRicerca] = useState("");
    const [libroData, setData] = useState([]);
    const [preferiti, setPreferiti] = useState([]);

    // Carica i preferiti dal localStorage quando il componente viene montato per la prima volta, per evitare di perdere i preferiti precedenti
    useEffect(() => {
        const magPreferiti = JSON.parse(localStorage.getItem("preferiti")) || [];
        setPreferiti(magPreferiti);
    }, []);

    const ricercaLibro = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + ricerca + '&key=AIzaSyB5qsgc2rHVYg4IrDjDETGBVmyLKS-2ZhE' + '&maxResults=40')
            .then(testo => testo.json())
            .then(dati => {
                console.log(dati)
                setData(dati.items);
            });
    };

    const avvioRicerca = (e) => {
        //per evitare che refreshi la pagina cliccando invio
        e.preventDefault();
        ricercaLibro();
    };

    const aggiungiAiPreferiti = (libro) => {
        const nuoviPreferiti = [...preferiti, libro];
        setPreferiti(nuoviPreferiti);
        localStorage.setItem("preferiti", JSON.stringify(nuoviPreferiti));
    };

    return (
        <div>
            <Navbar />
            <div className="header">
                <div className="row justify-content-center h-75">
                    <div className="col-12 ricerca">
                        <h1>Fai la tua ricerca</h1>
                        <p>I libri sono la chiave per aprire<br /> nuovi mondi infiniti.</p>
                        <div className="search">
                            <form onSubmit={avvioRicerca}>
                                <input type="text" placeholder="Inserisci" value={ricerca} onChange={e => setRicerca(e.target.value)} />
                                <button type="submit">Cerca</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    <Card book={libroData} onAggiungiAiPreferiti={aggiungiAiPreferiti} />
                }
            </div>
        </div>
    );
};

export default Main;
