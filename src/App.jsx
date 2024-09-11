import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication'
import AdminHomepage from './pages/AdminHomepage/AdminHomepage'

const App = () => {
  

  return (
    <BrowserRouter>
       <Routes>
          <Route path='/authentication' element={<Authentication/>}/>
          <Route path='/' element={<AdminHomepage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
