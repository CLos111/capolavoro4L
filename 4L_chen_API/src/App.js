import React from 'react';
import Main from './Pages/Main';
import Preferiti from './Pages/Preferiti';
import './Components/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/preferiti' element={<Preferiti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
