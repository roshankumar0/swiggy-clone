import React from 'react'
const IMAGE_BASE =
    "https://media-assets.swiggy.com/swiggy/image/upload/"

const Dineout = ({ info }) => {
    console.log(info)
    if (!info) return null;

    return (
        <div>
            {info.mediaFiles.map((files) => {
                return <img src={IMAGE_BASE + files.url} alt="" />
            })}
        </div>
    )
}

export default Dineout
