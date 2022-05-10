import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlantList(data))
  }, [])
  // console.log(plantList[0])

  function addPlant(newbie){
    setPlantList([...plantList, newbie])
  }

  // function filterPlant(name){
  //   setPlantList(plantList.filter((plant) => name === plant.name.value
  //   ))
    
  // }

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} onAddPlant={addPlant} //filterPlant={filterPlant}
       />
    </div>
  );
}

export default App;
