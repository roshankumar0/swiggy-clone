import React from 'react'
import Header from './components/Header'
import Bestfood from './components/Bestfood'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import RestaurantsMenu from './components/RestaurantsMenu'
import Instamart from './components/Instamart'
import CollectionRestaurants from './components/CollectionRestaurants '
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/instamart' element={<Instamart />} />
          <Route path='/city-delhi/:id' element={<RestaurantsMenu />} />
          <Route path='/collection/:id' element={<CollectionRestaurants/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
