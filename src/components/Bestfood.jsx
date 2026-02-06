import React, { useRef, useState } from "react";
import Food_data from "../Utils/FoodData";
import Allfoodcard from "./Allfoodcard";
import Dineout from "./Dineout";

const Bestfood = () => {
    const scrollRef = useRef(null);
    // const[active,setActive]=useState(false)
    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // jitna scroll chahiye
            behavior: "smooth",
        });
    };
    const scrollRight = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };
    return (
        <main className="max-w-[80%] mx-auto px-4 py-8 space-y-12">
            {/* Food Sections */}
            {Food_data.map((data, index) => (
                <section key={data.card.card.id || index} className="space-y-4">
                    <header>
                        {data?.card?.card?.imageGridCards && data?.card?.card?.header && (<h2 className="text-2xl font-bold text-gray-900">
                            {data?.card?.card?.header?.title}
                        </h2>)
                        }

                    </header>

                    <Allfoodcard
                        layout={data.card.card.layout}
                        imageCard={data?.card?.card?.imageGridCards?.info}
                    />
                </section>
            ))}

            {/* Dineout Section */}
            <section className="space-y-4 flex flex-col">
                {/* Header with arrows */}
                <header className="flex items-center justify-between">
                    <div className="flex gap-2 w-full justify-end">
                        <button
                            aria-label="Previous"
                            onClick={scrollLeft}
                            className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                        >
                            ←
                        </button>

                        <button
                            aria-label="Next"
                            onClick={scrollRight}
                            className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                        >
                            →
                        </button>
                    </div>
                </header>

                {/* Horizontal scroll cards */}
                <div ref={scrollRef} className="flex gap-6 pb-4 overflow-auto scrollbar">
                    {Food_data[2]?.card?.card?.info[0]
                        ?.stackedDetails?.dineoutRestaurants?.restaurants
                        ?.map((dineout, index) => (
                            <article
                                key={dineout?.info?.id || index}
                                className="min-w-[300px] flex-shrink-0 cursor-pointer"
                            >
                                <Dineout
                                    info={dineout.info}
                                    layout={Food_data[2]?.card?.card?.info[0].layout}
                                />
                            </article>
                        ))}
                </div>
            </section>

        </main>
    );
};

export default Bestfood;
