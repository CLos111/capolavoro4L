// Card.js
import React, { useState } from "react";
import Specifici from "./Specifici";

const Card = ({ book, onAggiungiAiPreferiti }) => {
    const [visibile, setVisibile] = useState(false);
    const [libroItem, setItem] = useState(null);


    const exitSpec = () => {
        setVisibile(false);
        setItem(null);
    };

    const passaggioAiPreferiti = () => {
        if (libroItem) {
            onAggiungiAiPreferiti(libroItem);
        }
    };

    return (
        <>
            {book.map((item, index) => {
                let immagine = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                if (immagine) {
                    return (
                        <div key={index} className="card" onClick={() => { setVisibile(true); setItem(item) }}>
                            <img src={immagine} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                            </div>
                        </div>
                    )
                }
                return null;
            })}
            <Specifici show={visibile} item={libroItem} onExit={exitSpec} onAggiungiAiPreferiti={passaggioAiPreferiti} />
        </>
    )
}

export default Card;

