import React, { useState } from "react";

function NewPlantForm(func) {
  const toAddPlant = func.toAddPlant

  const [formData, setFormData] = useState({
    id: "",
    name: "", 
    image: "", 
    price: parseFloat(0)
  })

  function clearForm(){
    setFormData({
      id: "",
      name: "", 
      image: "", 
      price: parseFloat(0)
    })
  }

  function handleSetFormData(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newItem) => toAddPlant(newItem))

    clearForm()
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleSetFormData}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleSetFormData} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleSetFormData} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
