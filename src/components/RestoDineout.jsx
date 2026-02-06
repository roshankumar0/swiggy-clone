import React from 'react'
import { useParams } from 'react-router'
import Food_data from '../Utils/FoodData'

const RestoDineout = () => {
    const { restoId } = useParams();
    let last = Food_data[2].card.card.info[0].stackedDetails.dineoutRestaurants.restaurants.find((item) => item.info.id === restoId)
    console.log(last)
    // console.log(Food_data?.card?.card?.imageGridCards?.info)

    return (
        <div>

        </div>
    )
}

export default RestoDineout