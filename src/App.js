import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/home/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about/:id' element={<About/>}/>
      </Routes>

    </>
  );
};

export default App;