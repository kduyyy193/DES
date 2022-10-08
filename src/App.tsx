import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

import {Routes, Route } from "react-router-dom"

const App = () => {
  return (
      <div className='App'>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
  )
}

export default App