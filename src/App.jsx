import React from 'react'
import Header from './components/Header'
import Bestfood from './components/Bestfood'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Restaurants from './components/Restaurants'
import RestaurantsMenu from './components/RestaurantsMenu'
import Instamart from './components/Instamart'
import CollectionRestaurants from './components/CollectionRestaurants '
import SecondaryHome from './components/SecondaryHome'
import stored from './stores/swiggyStore'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <>
      <Provider store={stored}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/instamart' element={<Instamart />} />

            <Route element={<SecondaryHome />}>
              <Route path='/restaurants' element={<Restaurants />} />
              <Route path='/city-delhi/:idx' element={<RestaurantsMenu />} />
              <Route path='/collection/:id' element={<CollectionRestaurants />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
