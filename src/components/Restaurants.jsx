import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
    const [restaurantsData, setRestaurants] = useState([]);

    const fetchRestaurants = async () => {
        try {
            const cors = "https://cors-anywhere.herokuapp.com/";
            const res = await fetch(
                cors +
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const data = await res.json();
            setRestaurants(data?.data?.cards || []);
        } catch (error) {
            console.error("Restaurant fetch error:", error);
        }
    };
    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <main
            className="
        mx-auto
        max-w-screen-xl
        px-4 sm:px-6 lg:px-8
        py-6 sm:py-10
        space-y-10 sm:space-y-14
      "
        >
            {restaurantsData.map((item, index) => {
                const card = item?.card?.card;
                if (!card) return null;

                return (
                    <section
                        key={card?.id || index}
                        aria-labelledby={`section-${card?.id || index}`}
                        className="space-y-4 sm:space-y-"
                    >
                        {/* Section header */}
                        {card?.header?.title && (
                            <header>
                                <h2 id={`section-${card?.id || index}`} className="text-lg font-semibold text-gray-900 sm:text-xl  md:text-2xl">
                                    {card.header.title}
                                </h2>
                            </header>
                        )}

                        {/* Cards */}
                        <div className="relative">
                            <RestaurantCard cards={card} />
                        </div>
                    </section>
                );
            })}
        </main>
    );
};

export default Restaurants;
