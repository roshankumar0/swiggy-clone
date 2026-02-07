import React from "react";
import { Link } from "react-router";

const IMAGE_BASE =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const Allfoodcard = ({ imageCard, layout }) => {
  if (!Array.isArray(imageCard)) return null;

  const rows = layout?.rows || 1;
  const columns = layout?.columns || imageCard.length;
  const gap = layout?.itemSpacing || 8;
  return (
    <section aria-label="Food categories" className="w-full">
      {/* Scroll Container */}
      <div className="overflow-x-auto scroll-smooth scrollbar">
        {/* Grid wrapper */}
        <ul
          className="w-max"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateRows: `repeat(${rows}, auto)`,
            gridTemplateColumns: `repeat(${columns}, auto)`,
            gap: `${gap}px`,
          }}
        >
          {imageCard.map((item, index) => (
            <li
              key={item?.id || index}
              className="flex justify-center"
            >
              <figure className="text-center">
                <Link to={item?.action?.link}>
                  <img
                    src={IMAGE_BASE + item.imageId}
                    alt={item?.accessibility?.altText || "Food item"}
                    className="
                    object-contain transition-transform duration-200
                    hover:scale-105

                    w-24 h-24        /* mobile */
                    sm:w-28 sm:h-28  /* tablet */
                    md:w-32 md:h-32  /* small desktop */
                    lg:w-36 lg:h-36  /* large desktop */
                  "
                  />
                </Link>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Allfoodcard;
