import React from 'react'
import Food_data from '../Utils/FoodData';
import Allfoodcard from './Allfoodcard';
const Bestfood = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            {
                Food_data.map((data) => {
                    return <div key={data.card.card.id}>
                        <h1>{data?.card?.card?.header?.title}</h1>
                        <Allfoodcard layout={data.card.card.layout} imageCard={data?.card?.card?.imageGridCards?.info} />
                    </div>
                })
            }
        </div>
    )
}

export default Bestfood
