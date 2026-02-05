import React from "react";
import { Link } from "react-router";

const IMAGE_BASE =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = ({ cards }) => {
  if (!cards) return null;

  const categoryImages =
    cards?.gridElements?.infoWithStyle?.info || [];

  const restaurants =
    cards?.gridElements?.infoWithStyle?.restaurants || [];

  return (
    <section className="space-y-6">
      {/* Category / Banner images */}
      {categoryImages.length > 0 && (
        <div
          className="
            flex gap-4
            overflow-x-auto
            pb-2
            scrollbar
          "
        >
          {categoryImages.map((item) => (
            <figure
              key={item.id}
              className="flex-shrink-0"
            >
              <img
                src={IMAGE_BASE + item.imageId}
                alt=""
                className="
                  h-24 w-24
                  sm:h-28 sm:w-28
                  md:h-32 md:w-32
                  object-contain
                  transition-transform
                  hover:scale-105
                "
              />
            </figure>
          ))}
        </div>
      )}

      {/* Restaurant cards */}
      {restaurants.length > 0 && (
        <div
          className="
            grid gap-4
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {restaurants.map((item) => {
            const info = item?.info;
            if (!info) return null;

            return (
              <article
                key={info.id}
                className="
                  bg-white
                  rounded-xl
                  overflow-hidden
                  hover:shadow-md
                  transition
                "
              >
                <Link
                  to={`/city-delhi/${info.id}`}
                  className="block h-full"
                >
                  {/* Image */}
                  <figure className="relative">
                    <img
                      src={IMAGE_BASE + info.cloudinaryImageId}
                      alt={info.name}
                      className="
                        h-36 w-full
                        sm:h-40
                        md:h-44
                        object-cover
                      "
                    />

                    {/* Discount badge */}
                    {info?.aggregatedDiscountInfoV3 && (
                      <figcaption
                        className="
                          absolute bottom-2 left-2
                          bg-black/70 text-white
                          text-xs font-semibold
                          px-2 py-1 rounded
                        "
                      >
                        {info.aggregatedDiscountInfoV3.header}{" "}
                        {info.aggregatedDiscountInfoV3.subHeader}
                      </figcaption>
                    )}
                  </figure>

                  {/* Content */}
                  <div className="p-3 space-y-1">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                      {info.name}
                    </h3>

                    <div className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="font-medium text-green-600">
                        ★ {info.avgRating}
                      </span>
                      <span>•</span>
                      <span>{info.sla?.slaString}</span>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-1">
                      {info.locality}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RestaurantCard;
