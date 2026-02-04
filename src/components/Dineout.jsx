import React from "react";

const IMAGE_BASE =
    "https://media-assets.swiggy.com/swiggy/image/upload/";

const Dineout = ({ info }) => {
    if (!info) return null;

    return (
        <article
            className="
        min-w-[260px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px]
        bg-white rounded-2xl overflow-hidden
        shadow-sm hover:shadow-md transition-shadow duration-200
      "
        >
            {/* Image */}
            <figure className="relative h-40 sm:h-44 md:h-48 lg:h-52 w-full">
                <img
                    src={IMAGE_BASE + info?.mediaFiles?.[0]?.url}
                    alt={info?.name}
                    className="h-full w-full object-cover"
                />

                {/* Cost badge */}
                {info?.costForTwo && (
                    <figcaption className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
                        {info.costForTwo}
                    </figcaption>
                )}
            </figure>

            {/* Content */}
            <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                {/* Restaurant name */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-1">
                    {info?.name}
                </h3>

                {/* Coupon offer */}
                {info?.offerInfoV3?.couponOffer?.title && (
                    <p className="text-xs sm:text-sm font-medium text-green-600 line-clamp-1">
                        {info.offerInfoV3.couponOffer.title}
                    </p>
                )}

                {/* Vendor offer */}
                {info?.offerInfoV3?.vendorOffer && (
                    <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                        <span className="font-medium">
                            {info.offerInfoV3.vendorOffer.title}
                        </span>{" "}
                        {info.offerInfoV3.vendorOffer.subtitle}
                    </p>
                )}
            </div>
        </article>
    );
};

export default Dineout;
