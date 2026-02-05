import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Recommended from '../components/Recommended'
const RestaurantsMenu = () => {
    const [details, setDetails] = useState([])
    const { idx } = useParams()
    let cors = 'https://cors-anywhere.herokuapp.com/'
    let url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${idx}`
    useEffect(() => {
        async function fetchMenu() {
            try {
                let res = await fetch(cors + url)
                let datas = await res.json();
                setDetails(datas?.data?.cards)
            } catch (error) {
                console.log(error, 'inside restaurantMenu.jsx')
            }
        }
        fetchMenu()
    }, [idx])
    return (
        <div>
            {
                details.map((menu) => {
                    return <div key={menu?.card?.card?.text}>
                        <Recommended recommended={menu?.groupedCard?.cardGroupMap} />
                    </div>
                })
            }
        </div>
    )
}

export default RestaurantsMenu
