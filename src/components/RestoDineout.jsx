import React from 'react'
import { useParams } from 'react-router'
import Food_data from '../Utils/FoodData'

const RestoDineout = () => {
    const { restoId } = useParams()

    const restaurant =
        Food_data?.[2]?.card?.card?.info?.[0]?.stackedDetails?.dineoutRestaurants?.restaurants
            ?.find((item) => item?.info?.id === restoId)

    const info = restaurant?.info

    if (!info) {
        return (
            <section className="flex h-screen items-center justify-center">
                <p className="text-gray-500">Restaurant not found</p>
            </section>
        )
    }

    return (
        <main className="mx-auto max-w-4xl p-4">
            <article className="overflow-hidden rounded-2xl bg-white shadow-md">
                {/* Content */}
                <section className="space-y-3 p-5">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-800">
                            {info?.name}
                        </h1>
                        <p className="text-sm text-gray-500">
                            {info?.locality}
                        </p>
                    </header>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700">
                            ⭐ {info?.rating?.value}
                        </span>
                        <span>
                            {info?.rating?.count} Google reviews
                        </span>
                    </div>

                    <p className="text-lg font-medium text-gray-700">
                        {info?.costForTwo}
                    </p>
                </section>
                {/* Image */}
                <figure className="h-64 w-full overflow-hidden">
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.mediaFiles?.[0]?.url}`}
                        alt={info?.name}
                        className="h-full w-full object-cover"
                    />
                </figure>
            </article>
        </main>
    )
}

export default RestoDineout