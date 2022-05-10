import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(props) {
  // console.log(props.plantList)
  const plants = props.plantList

  const [altList, setAltList] = useState([])

  function useSetAltList(smth){
    plants.array.forEach(plant => {
      if (plant.name.toUpperCase() === smth.toUpperCase()){
        setAltList([...plant])
        console.log(altList)
      }
          
    
    })
   
  }

  return (
    <main>
      <NewPlantForm toAddPlant={props.onAddPlant} />
      <Search searchPlant={useSetAltList} />
      {plants.map((plant) => <PlantList id={plant.id} name={plant.name} img={plant.image} price={plant.price} key={plant.id} />)}
    </main>
  );
}

export default PlantPage;
