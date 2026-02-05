import React from 'react'
import Shimmer from './Shimmer';
const DineoutShimmer = () => {
    return (
        <article
            className="
        bg-white rounded-2xl overflow-hidden
        shadow-sm
        min-w-[260px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px]
      "
        >
            {/* IMAGE SHIMMER */}
            <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 w-full">
                <Shimmer className="h-full w-full" />

                {/* bottom gradient bar */}
                <div className="absolute bottom-0 inset-x-0 h-[50px] bg-gradient-to-t from-black/60 to-transparent p-3 flex justify-between items-end">
                    <Shimmer className="h-4 w-32 rounded" />
                    <Shimmer className="h-4 w-10 rounded" />
                </div>
            </div>

            {/* CONTENT SHIMMER */}
            <div className="p-3 sm:p-4 space-y-3">
                <div className="flex justify-between gap-4">
                    <Shimmer className="h-3 w-36 rounded" />
                    <Shimmer className="h-3 w-14 rounded" />
                </div>

                <div className="flex justify-between">
                    <Shimmer className="h-3 w-40 rounded" />
                    <Shimmer className="h-3 w-12 rounded" />
                </div>

                <div className="flex items-center gap-2">
                    <Shimmer className="h-4 w-4 rounded-full" />
                    <Shimmer className="h-3 w-32 rounded" />
                </div>

                <Shimmer className="h-9 w-full rounded-lg" />
            </div>
        </article>
    );
}

export default DineoutShimmer
