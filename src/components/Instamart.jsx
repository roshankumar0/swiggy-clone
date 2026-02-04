import React, { useEffect, useState } from 'react'
import HotDeals from './Grocery'
import Grocery from './Grocery'

const Instamart = () => {
  let [insta, setInsta] = useState([])
  let cors = 'https://cors-anywhere.herokuapp.com/'
  async function InstaFetch() {
    let res = await fetch(cors + "https://www.swiggy.com/api/instamart/home/v2?offset=3&layoutId=4987&storeId=1404165&primaryStoreId=1404165&secondaryStoreId=&clientId=INSTAMART-APP")
    let data = await res.json()
   setInsta(data.data)
  }
  useEffect(() => {
    InstaFetch()
   }, []);
  return (
    <div>
      <Grocery/>
    </div>
  )
}

export default Instamart
