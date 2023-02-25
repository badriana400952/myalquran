import React from 'react';
// import Home from './componen/Home';
import Tafsir from './componen/Tafsir';
// import Ayat from './componen/Ayat';
import Layoute from './componen/Layoute'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Aayat from './Aayat';

import Nopage from './Nopage';
// import Notefound from './componen/Notefound';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route path="/" element={<Hero />} />
          <Route path="/*" element={<Nopage />} />

          <Route path="/:id" element={<Aayat />} />
          <Route path="/Tafsir" element={<Tafsir />} />
          <Route path="*" element={<Nopage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
