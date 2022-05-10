import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  // console.log(props)
  return (
    <ul className="cards" >{/* render PlantCards components in here */
    <PlantCard id={props.id} name={props.name} img={props.img} price={props.price} />}</ul>
  );
}

export default PlantList;
