import {useEffect, useState} from 'react';
import { BrowserRouter  , Route, Routes } from "react-router-dom";
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/movie/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  