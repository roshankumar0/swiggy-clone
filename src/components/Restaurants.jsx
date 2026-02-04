import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
    let [restaurantsdata, setRestaurants] = useState([])
    async function Restaurantsfetch() {
        try {
            let cors = 'https://cors-anywhere.herokuapp.com/'
            let res = await fetch(cors + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1")
            let data = await res.json()
            setRestaurants(data.data.cards)
        } catch (error) {
            console.log('efsehf', error)
        }

    }
    useEffect(() => {
        Restaurantsfetch()
    }, [])
    return (
        <>
            {
                restaurantsdata?.map((item) => {
                    return <div key={item?.card?.card?.id}>
                        <h1>{item?.card?.card?.header?.title}</h1>
                        <RestaurantCard cards={item?.card?.card} />
                    </div>
                })
            }

        </>
    )
}

export default Restaurants
