import React from 'react'
import Food_data from '../Utils/FoodData';
import Allfoodcard from './Allfoodcard';
import Dineout from './Dineout';

const Bestfood = () => {
    // var datas = Food_data;
    // console.log(Food_data[2]?.card?.card?.info[0].layout)
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
            <div className='flex gap-4 overflow-x-scroll'>
                {
                    Food_data[2]?.card?.card?.info[0]
                        ?.stackedDetails?.dineoutRestaurants?.restaurants
                        ?.map((dineout, index) => (
                            <Dineout
                                key={dineout?.info?.id || index}
                                info={dineout.info}
                                layout={Food_data[2]?.card?.card?.info[0].layout}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Bestfood
