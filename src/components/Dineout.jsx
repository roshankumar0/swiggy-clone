import React from 'react'
const IMAGE_BASE =
    "https://media-assets.swiggy.com/swiggy/image/upload/"

const Dineout = ({ info }) => {
    if (!info) return null;
    return (
        <div className='min-w-[328px]'>
            {info?.mediaFiles.map((files) => {
                return <div >
                    <img className='h-full w-full object-cover' src={IMAGE_BASE + files?.url} alt="" />
                    <span>{info?.costForTwo}</span>
                    <span>{info?.name}</span>
                    <span>{info?.offerInfoV3?.couponOffer?.title}</span>
                    <span>{info?.offerInfoV3?.vendorOffer?.title}{info?.offerInfoV3?.vendorOffer?.subtitle}</span>
                </div>
            })}
        </div>
    )
}

export default Dineout
