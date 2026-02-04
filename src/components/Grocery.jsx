import React, { useEffect, useState } from "react";

const IMAGE_BASE =
    "https://media-assets.swiggy.com/swiggy/image/upload/";

const Grocery = () => {
    const [groceries, setGroceries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const cors = "https://cors-anywhere.herokuapp.com/";
                const res = await fetch(
                    cors +
                    "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1404165&primaryStoreId=1404165&secondaryStoreId=&clientId=INSTAMART-APP"
                );
                const data = await res.json();
                setGroceries(data?.data?.cards || []);
            } catch (error) {
                console.error("Grocery fetch error:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <main className="space-y-10">
            {groceries.map((grocery, index) => {
                const card = grocery?.card?.card;
                const items =
                    card?.gridElements?.infoWithStyle?.info || [];

                if (!card?.header?.title || !items.length) return null;

                return (
                    <section
                        key={card?.id || index}
                        className="space-y-4"
                        aria-label={card.header.title}
                    >
                        {/* Section title */}
                        <header>
                            <h2
                                className="
                  text-lg font-semibold text-gray-900
                  sm:text-xl
                  md:text-2xl
                "
                            >
                                {card.header.title}
                            </h2>
                        </header>

                        {/* Horizontal scroll items */}
                        <ul
                            className="
                flex gap-4
                overflow-x-auto
                pb-2
                scrollbar-hide
              "
                        >
                            {items.map((item, i) => (
                                <li
                                    key={item.id || i}
                                    className="
                    min-w-[120px]
                    sm:min-w-[140px]
                    md:min-w-[160px]
                    text-center
                    flex-shrink-0
                  "
                                >
                                    <figure className="space-y-2">
                                        <img
                                            src={IMAGE_BASE + item.imageId}
                                            alt={item.description || "Grocery item"}
                                            className="
                        w-full aspect-square
                        object-contain
                        rounded-xl
                        hover:scale-105
                        transition
                      "
                                        />
                                        {item.description && (
                                            <figcaption
                                                className="
                          text-xs sm:text-sm
                          text-gray-700
                          line-clamp-2
                        "
                                            >
                                                {item.description}
                                            </figcaption>
                                        )}
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            })}
        </main>
    );
};

export default Grocery;
