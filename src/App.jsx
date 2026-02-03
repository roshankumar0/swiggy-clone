import React from 'react'
import Header from './components/Header'
import Bestfood from './components/Bestfood'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Restaurants from './components/Restaurants'
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Restaurants />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
