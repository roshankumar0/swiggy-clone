import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../stores/swiggySlice';

const InstamartShimmer = () => {
  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      {[1, 2, 3].map((section) => (
        <section key={section} className="mb-10">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4 animate-pulse"></div>

          <div className="
            grid gap-4
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          ">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="h-32 sm:h-36 md:h-40 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

const Instamart = () => {
  const IMAGE_BASE = "https://media-assets.swiggy.com/swiggy/image/upload/";
  const dispatch = useDispatch();
  const { loading, error, instaData } = useSelector(state => state.swiggy);

  const instaMart = instaData?.data?.cards
    ?.filter(item => item.card?.card?.header?.title)
    .map(item => item.card.card);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <InstamartShimmer />;
  if (error) return <p className="text-center mt-10">Something went wrong</p>;

  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      {instaMart?.map((section, index) => {
        const items = section?.gridElements?.infoWithStyle?.info;
        console.log(items)

        return (
          <section key={index} className="mb-10 px-4">
            <header className="mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {section?.header?.title}
              </h2>
            </header>

            <div className="flex mt-4 gap-2">
              {items?.map((item) => (
                <div className='max-w-[112px] cursor-pointer' key={item.id}>
                  <figure

                    className="rounded-xl"
                  >
                    <img
                      src={IMAGE_BASE + item.imageId}
                      alt={item?.description || 'Instamart item'}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <p className='p-2 text-[13px] font-semibold'>{item?.description}</p>
                  </figure>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Instamart;