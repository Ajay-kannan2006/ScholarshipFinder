import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScholarCard from './components/SchorshipPage/Scholarcard';
import Scholar from './components/SchorshipPage/Scholar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Footer from './footer';
function App() {
  return (
    <>
      {/* <h1>Scholarship Finder</h1> */}
      {/* <br /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/scholarships' element={<Scholar />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
