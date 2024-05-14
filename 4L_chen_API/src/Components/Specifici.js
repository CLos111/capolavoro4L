import React from 'react';

const Specifici = ({ show, item, onExit, onAggiungiAiPreferiti }) => {
    if (!show) {
        return null;
    }
    let immagine = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <div className="overlay">
            <div className="overlayIn">
                <div className="button-group">
                    <button className="exit" onClick={onExit}>Esci</button>
                </div>
                <div className="inBox">
                    <img src={immagine} alt="" />
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <button className='m-5' onClick={onAggiungiAiPreferiti}>Aggiungi ai preferiti</button>
                    </div>
                </div>
                <h4 className="descrizione d-none d-sm-block">{item.volumeInfo.description}</h4>
            </div>
        </div>
    )
}

export default Specifici;

