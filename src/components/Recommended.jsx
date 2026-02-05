import React from 'react'

const Recommended = ({ recommended }) => {
  let itemsWithTitle = recommended?.REGULAR?.cards?.filter(
    (items) => items?.card?.card?.title
  )
  return (
    <div className='max-w-[800px] min-w-[800px] mt-5 mx-auto mb-0'>
      {
        itemsWithTitle?.map((items) => {
          return <div>
            <RecommendedCard cards={items?.card?.card} />
          </div>
        })
      }
    </div>
  )
}

export default Recommended

const RecommendedCard = ({ cards }) => {
  if (cards?.title !== "Recommended") return null;

  return (
    <article className="mb-10">
      {/* ===== CATEGORY TITLE ===== */}
      <header className="mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          {cards.title}
        </h2>
      </header>

      {/* ===== ITEM LIST ===== */}
      <ul className="space-y-6">
        {cards?.itemCards?.map((item, index) => {
          const info = item?.card?.info;

          return (
            <li
              key={index}
              className="flex flex-col sm:flex-row gap-4 border-b pb-6 last:border-b-0"
            >
              {/* ===== LEFT CONTENT ===== */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold">
                  {info?.name}
                </h3>

                <p className="text-sm text-gray-800 mt-1">
                  ₹{(info?.price || info?.defaultPrice) / 100}
                </p>

                {info?.ratings?.aggregatedRating?.rating && (
                  <p className="text-xs text-green-700 mt-1">
                    ⭐ {info.ratings.aggregatedRating.rating}
                    <span className="text-gray-500 ml-1">
                      ({info.ratings.aggregatedRating.ratingCountV2})
                    </span>
                  </p>
                )}

                {info?.description && (
                  <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2">
                    {info.description}
                  </p>
                )}
              </div>

              {/* ===== IMAGE ===== */}
              {info?.imageId && (
                // min-h-[174px] min-w-[156px]
                <figure className="w-full sm:w-28 md:w-32 flex-shrink-0 relative ml-[60px]  ">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                    alt={info?.name}
                    className="h-[144px] w-[156px] sm:h-28 md:h-32 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <button className='absolute h-[38px] bg-white rounded-lg left-1/2  bottom-0 transform translate-x-[-50%] w-[120px] font-semibold tracking-[--0.45px] leading-[22px] text-[#1ba672]'>Add</button>
                </figure>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
};