import React from "react"

const Allfoodcard = ({ imageCard, layout }) => {
  if (!Array.isArray(imageCard)) return null

  const rows = layout?.rows || 1
  const columns = layout?.columns || imageCard.length
  const gap = layout?.itemSpacing || 8
  const scroll = layout?.horizontalScrollEnabled

  return (
    <div className="">
      <div className={scroll ? "overflow-x-auto scrollbar-hide" : ""}>
        <div
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
            <div key={item.id || index} className="text-center">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  item.imageId
                }
                alt=""
                className="w-36 h-36 object-contain hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Allfoodcard
