import React, { useEffect, useState } from 'react'

const Grocery = () => {
    let [groceries, setGroceries] = useState([])
    useEffect(() => {
        async function fetchdata() {
            let cors = 'https://cors-anywhere.herokuapp.com/'
            let res = await fetch(cors + "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1404165&primaryStoreId=1404165&secondaryStoreId=&clientId=INSTAMART-APP")
            let data = await res.json()
            setGroceries(data?.data?.cards)
            console.log(data?.data?.cards)
        }
        fetchdata()
    }, [])
    return (
        <div>
            {
                groceries?.map((grocery) => {
                    return <div key={grocery?.card?.card?.id}>
                        <span>{grocery?.card?.card?.header?.title}</span>
                      <div className='flex overflow-x-scroll gap-4'>
                         {grocery?.card?.card?.gridElements?.infoWithStyle?.info.map((imgs)=>{
                        return <div>
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+imgs?.imageId} alt="" />
                            <h3>{imgs?.description}</h3>
                        </div>
                       })}
                      </div>
                    </div>
                })
            }
        </div>
    )
}

export default Grocery
