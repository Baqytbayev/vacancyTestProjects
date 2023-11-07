import React from 'react';

import './App.css';
import GetRandom from './components/getRandom/getRandom';
import RegistrationForm from './components/registrationForm/registrationForm';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<RegistrationForm/>} />
        <Route path={"/search"} element={<GetRandom/>} />
        <Route path='*' element={<h3>NOT FOUND</h3>} />
        </Route>
      </Routes>
      Hello
      {/* <RegistrationForm/>
      <GetRandom/> */}
    </>
  );
}

export default App;
