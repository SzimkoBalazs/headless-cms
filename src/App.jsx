import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication'

const App = () => {
  

  return (
    <BrowserRouter>
       <Routes>
          <Route path='/authentication' element={<Authentication/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
