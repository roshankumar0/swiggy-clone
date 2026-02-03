import React from 'react'
import { Link } from 'react-router';

const RestaurantCard = ({ cards }) => {
  if (!cards) return null;
  let baseUrlImage = 'https://media-assets.swiggy.com/swiggy/image/upload/'
  const restaurants = cards?.gridElements?.infoWithStyle?.info || []
  console.log(cards?.gridElements?.infoWithStyle?.restaurants)
  let topRestaurant = cards?.gridElements?.infoWithStyle?.restaurants || []
  console.log(topRestaurant, 'rsoshan')
  return (
    <div>
      <div className='flex'>
        {
          restaurants.map((item) => {
            return <div key={item.id}>
              <img src={baseUrlImage + item?.imageId} alt="" />
            </div>
          })
        }
      </div>
      <div className='flex cursor-pointer'>
        {
          topRestaurant?.map((item) => {
            return <Link to={`/city-delhi/${item?.info?.id}`}>
              <div key={item.info.id}>
                <img src={baseUrlImage + item?.info?.cloudinaryImageId} alt="" />
                <span>{item?.info?.name}</span>
                <span>{item?.info?.avgRating}</span>
                <span>{item?.info?.sla?.slaString}</span>
                <span>{item?.info?.locality}</span>
                <span>{item?.info?.aggregatedDiscountInfoV3?.header}{item?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
              </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default RestaurantCard
