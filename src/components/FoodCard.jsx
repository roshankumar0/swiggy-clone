const Foodcard = () => {
  const items = [
    {
      title: "Order Food Online",
      link: "/restaurants",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/25/4ad89473-2edb-4f6b-8092-979080ebdf13_Upto6010.png",
    },
    {
      title: "Swiggy Instamart",
      link: "/instamart",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/24/db90361b-c758-4429-83bd-9ca20e3c2bea_snacks3.png",
    },
    {
      title: "Dineout",
      link: "/dineouts",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/18/a5208a79-457f-4a2f-8368-a386d47fa4f2_341.png",
    },
  ];

  return (
    <section className="flex items-center px-2 pb-5 justify-center">
      <div className="overflow-scroll scrollbar flex-nowrap w-[80%] max-w-[80%] min-h-[320px] flex items-center">
      {items.map((img)=>(
        <img src={img.img} className="h-full w-full object-contain " alt="" />
      ))}
    </div>
    </section>
  );
};

export default Foodcard;