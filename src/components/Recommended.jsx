const Recommended = ({ recommended }) => {
  const dataWithTitle = recommended?.filter(
    item => item?.card?.card?.title
  );

  console.log(dataWithTitle);

  return (
    <div>
      <h2>Recommended ({dataWithTitle.length})</h2>
      <div>
        {
            dataWithTitle.itemCards.map((card)=>{
                return <div>
                    <h3>{(card?.card?.info?.price)/100}</h3>
                    <h3>{card?.card?.info?.name}</h3>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+card?.card?.info?.imageId} alt="" />
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Recommended;
