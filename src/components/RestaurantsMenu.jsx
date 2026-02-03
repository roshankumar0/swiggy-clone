import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const RestaurantsMenu = () => {
    let [menu, setMenu] = useState([])
    const { id } = useParams()
    let cors = 'https://cors-anywhere.herokuapp.com/'
    let url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
    async function RestaurantSingleMenu() {
        let res = await fetch(cors + url)
        let data = await res.json();
        setMenu(data?.data?.cards)
    }

    useEffect(() => {
        RestaurantSingleMenu()
    }, [])
    console.log(menu)
    return (
        <div>
            {menu.map((items, index) => (
                <div key={index}>
                    <h1>{items?.card?.card?.text}</h1>

                    <ul className='flex'>
                        {items?.card?.card?.tabs?.map((tab, i) => (
                            <li key={i}>{tab?.title}</li>
                        ))}
                    </ul>
                    <div>
                        {/* <img src={'https://media-assets.swiggy.com/swiggy/image/upload/' + items?.card?.card?.info?.cloudinaryImageId} alt="" /> */}
                        <p>{items?.card?.card?.info?.costForTwoMessage}</p>
                        <p>{items?.card?.card?.info?.totalRatingsString}</p>
                        <p>{items?.card?.card?.info?.avgRatingString}</p>
                        <p>{items?.card?.card?.info?.locality}</p>
                        <p>{items?.card?.card?.info?.areaName}</p>
                    </div>
                    <div>
                        {items?.card?.card?.gridElements?.infoWithStyle?.offers?.map((offer) => {
                            return <div>
                                <div>
                                    {offer?.info?.offerTag}
                                </div>
                                <div>
                                    {offer?.info?.header}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RestaurantsMenu
