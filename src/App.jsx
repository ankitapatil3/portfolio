import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer'
import Portfolio from './Component/Portfolio'
import Clients from './Component/Clients'
import Skills from './Component/Skills'
import Contact from './Component/Contact'

function App() {


  return (
    <div >
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/clients' element={<Clients/>}/>
      <Route path='/skill' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
   <Footer/>
{/* <Home/> */}
    </div>
  )
}

export default App
