import React, { useEffect, useState } from 'react'

const Restaurants = () => {
    let [restaurants, setRestaurants] = useState({})
    async function Restaurants(params) {
        let cors = 'https://cors-anywhere.herokuapp.com/'
        let res = await fetch(cors + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1")
        let data = await res.json()
        setRestaurants(data)
    }
    useEffect(() => {
        Restaurants()
    }, [])
    console.log(restaurants)
    return (
        <div>
            restaurants
        </div>
    )
}

export default Restaurants
