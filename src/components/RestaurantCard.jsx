import React from 'react'

const RestaurantCard = ({cards}) => {
    if(!cards) return null;
    let baseUrlImage='https://media-assets.swiggy.com/swiggy/image/upload/'
    const restaurants =cards?.gridElements?.infoWithStyle?.info || []
    console.log(cards?.gridElements?.infoWithStyle?.restaurants)
  return (
    <div className='flex'>
      {
        restaurants.map((item)=>{
            return <div key={item.id}>
                <img src={baseUrlImage+item?.imageId} alt="" />
            </div>
        })
    }
    </div>
  )
}

export default RestaurantCard
