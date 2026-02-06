import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const RestaurantsMenu = () => {
    const [details, setDetails] = useState({});
    const { idx } = useParams();

    const cors = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${idx}`;
    async function fetRecommended() {
        let res = await fetch(cors + url)
        let recommended = await res.json()
        let card = recommended?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
        setDetails(card);
    };
    useEffect(() => {
        fetRecommended()
    }, [])
    console.log(details)
    return (
        <div className='max-w-[800px] min-w-[800px]  m-auto pt-6 pr-4 pb-4 pl-4'>
            <div className='flex mb-6'>

                <h2>{details?.title}</h2>
                {details?.itemCards?.length && (
                    <h2>({details?.itemCards?.length})</h2>
                )}
            </div>
            {
                details?.itemCards?.map((card) => {
                    return <ItemCard card={card} />
                })
            }
        </div>
    )
}

export default RestaurantsMenu

const ItemCard = ({ card }) => {
    const info = card?.card?.info;

    return (
        <article className="flex gap-4 py-6">
            {/* Left Content */}
            <div className="flex-1 ">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                    {info?.name}
                </h3>

                <p className="mt-1 text-sm font-medium">
                    ₹ {(info?.price || info?.defaultPrice) / 100}
                </p>

                <p className="mt-1 text-sm text-green-600">
                    ⭐ {info?.ratings?.aggregatedRating?.rating}
                    <span className="ml-1 text-gray-500">
                        ({info?.ratings?.aggregatedRating?.ratingCountV2})
                    </span>
                </p>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {info?.description}
                </p>
            </div>

            {/* Right Media */}
            <figure className="relative w-28 shrink-0 sm:w-32 md:w-36">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.imageId}`}
                    alt={info?.name}
                    loading="lazy"
                    className="h-[144px] w-[156px] rounded-lg object-cover sm:h-28 md:h-32"
                />

                <figcaption className="absolute inset-x-0 -bottom-3 flex flex-col items-center ] ">
                    <button className="rounded-md w-[120px] h-[38.4px] border border-green-600 bg-white px-4 py-1 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-50">
                        ADD
                    </button>
                    <span className="mt-1 text-[10px] text-gray-500">
                        Customisable
                    </span>
                </figcaption>
            </figure>
        </article>
    );
};