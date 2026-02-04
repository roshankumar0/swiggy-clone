const Foodcard = () => {
  const items = [
    {
      title: "Order Food Online",
      link: "/restaurants",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png",
    },
    {
      title: "Swiggy Instamart",
      link: "/instamart",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png",
    },
    {
      title: "Paan & Daily Needs",
      link: "/",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png",
    },
  ]

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6">

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <li key={item.title}>
              <article className=" overflow-hidden shadow-md hover:scale-105 transition">
                <a href={item.link} aria-label={item.title}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-cover"
                  />
                </a>
              </article>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Foodcard
