import React, { useState } from "react";

function PlantCard(plantys) {
  // console.log(plantys)
  const { id, name, img, price} = plantys;

  const [stockStatus, setStockStatus] = useState(true);
  function handleSetStockStat(){
    setStockStatus(!stockStatus)
  };

  return (
    <li className="card" id={id} >
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockStatus ? (
        <button className="primary" onClick={handleSetStockStat} >In Stock</button>
      ) : (
        <button onClick={handleSetStockStat} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
