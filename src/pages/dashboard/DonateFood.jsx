import React, { useState } from "react";

function DonateFood() {
    const [foodName, setFoodName] = useState("");
    const [quantity, setQuantity] = useState("");
    const[foodType, setFoodType] = useState("");
    const[location, setLocation] = useState("");

    function handleDonate(event){
        event.preventDefault();
        if(foodName === "" || quantity === "" || foodType === "" || location === ""){
            alert("please fill all fields");
            return;
        }

        const donation ={
            id: Date.now(),
            foodName: foodName,
            quantity: quantity,
            foodType: foodType,
            location: location,
            status: "Available"
        };

        const oldDonation = Json.parse(localStorage.getItem("foodSecure_donation")) || [];
        oldDonation.push(donation);
        localStorage.setItem(
            "foodrescue_donations",
            Json.stringify(oldDonation)
        );
        alert("Food donation submitted successfully!");
    }
  return (
    <div className="donate-food-page">
      <h1>Donate Food</h1>

      <p>
        Share your surplus food with people in need.
      </p>

      <form onSubmit={handleDonate}>
        <label>Food Name</label>
        <input type="text"
        placeholder="e.g. cooked rice" 
        vale={foodName}
        onChange={(e)=> setFoodName(e.target.value)}/>

        <label>Quantity</label>
        <input type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)} />

        <label>Food Type</label>
        <select
        value={foodType}
        onChange={(e)=>setFoodType(e.target.value)}>
    <option value="">Select food type</option>
    <option value="cooked">Cooked Food</option>
    <option value="vegetables">Vegetables</option>
    <option value="fruits">Fruits</option>
    <option value="bakery">Bakery</option>
    <option value="other">Other</option>
        </select>

        <label>Pickup Location</label>
  <input
    type="text"
    placeholder="Enter pickup location"
    value={location}
    onChange={(e)=>setLocation(e.target.value)}
  />

  <button type="submit">
    Donate Food
  </button>
      </form>
    </div>
  );
}

export default DonateFood;