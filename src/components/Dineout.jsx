import React from "react";
import DineoutShimmer from "./Shimmer/DineoutShimmer";
const IMAGE_BASE =
    "https://media-assets.swiggy.com/swiggy/image/upload/";

const Dineout = ({ info }) => {
    if (info === null) return
    return (
        <article
            className="
        bg-white rounded-2xl overflow-hidden
        shadow-sm hover:shadow-md transition
        min-w-[260px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px]
      "
        >
            {/* ================= IMAGE ================= */}
            <figure className="relative h-40 sm:h-44 md:h-48 lg:h-52 w-full">
                <img
                    src={IMAGE_BASE + info?.mediaFiles?.[0]?.url}
                    alt={info?.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />


                {/* Name + Rating */}
                <header
                    className="absolute inset-x-0 bottom-0 h-[50px] flex items-center justify-between gap-2 pt-4 px-3 pb-3 bg-gradient-to-t from-black to-transparent"
                >
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-1">
                        {info?.name}
                    </h3>

                    {info?.rating?.value && (
                        <div className="flex items-center gap-1 text-xs font-medium text-white">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7.2" fill="#128540" />
                                <path
                                    d="M8.06 10.29L5.85 11.52L6.41 8.82L4.19 7.19L6.59 6.3L7.63 4.05L8.37 4.05L9.41 6.3L11.81 7.19L9.59 8.82L10.15 11.52Z"
                                    fill="white"
                                />
                            </svg>
                            {info.rating.value}
                        </div>
                    )}
                </header>
            </figure>

            {/* ================= CONTENT ================= */}
            <div className="p-3 sm:p-4 space-y-2 text-[#02060c99] font-extralight">

                <div className="flex items-center justify-between gap-4">
                    {/* Cuisines */}
                    {info?.cuisines && (
                        <p className="text-xs sm:text-sm line-clamp-1">
                            {info.cuisines.join(" • ")}
                        </p>
                    )}
                    {/* Cost badge */}
                    {info?.costForTwo && (
                        <figcaption className="">
                            {info.costForTwo}
                        </figcaption>
                    )}
                </div>
                {/* Location + Distance */}
                <div className="flex justify-between text-xs sm:text-sm">
                    <address className="not-italic line-clamp-1">
                        {info?.locationInfo?.formattedAddress}
                    </address>
                    <span className="shrink-0">
                        {info?.locationInfo?.distanceString}
                    </span>
                </div>

                {/* Table booking */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
                        alt="Table booking"
                        className="h-4 w-4 object-contain"
                    />
                    <span>Table booking available</span>
                </div>

                {/* Vendor Offer */}
                {info?.offerInfoV3?.vendorOffer && (
                    <div className="flex gap-2 text-xs sm:text-sm text-white rounded-lg px-2 h-9 items-center bg-[#1ba672]">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
                            alt="Offer"
                            className="h-4 w-4 object-contain"
                        />
                        <p className="line-clamp-2">
                            <span className="font-medium">
                                {info.offerInfoV3.vendorOffer.title}
                            </span>{" "}
                            {info.offerInfoV3.vendorOffer.subtitle}
                        </p>
                    </div>
                )}

                {/* Coupon Offer */}
                {/* {info?.offerInfoV3?.couponOffer?.title && (
                    <p className="text-xs sm:text-sm  text-[#1ba672] h-9 rounded-lg pl-2 mt-2 line-clamp-1 bg-[#c8f9e5] items-center flex ">
                        {info.offerInfoV3.couponOffer.title}
                    </p>
                )} */}
                {/* Coupon Offer */}
                {info?.offerInfoV3?.couponOffer?.title && (
                    <p className="text-xs sm:text-sm  text-[#5134b6] h-9 rounded-lg pl-2 mt-2 line-clamp-1 items-center flex tracking-[-0.33px] text[13px] leading-[17px] ">
                        {info.offerInfoV3.couponOffer.title}
                    </p>
                )}

            </div>
        </article>
    );
};

export default Dineout;