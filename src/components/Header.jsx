import React from 'react'
import Navbar from './Navbar';
import Foodcard from './Foodcard'
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <div className='bg-[#ff5200] '>
     <Navbar/>
     <Searchbar/>
     <Foodcard/>
    </div>
  )
}

export default Header
