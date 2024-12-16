// RealEstateRow.jsx
import React from "react";
import fakeApiData from "../fake.json"; // Adjust path as needed
import "../App.css"; // Your styles

const RealEstateRow = () => {
  return (
    <div className="row-container flex flex-wrap gap-8">
      {fakeApiData.map((property) => (
        <div key={property.id} className="property-card">
          <h3>{property.title}</h3>
          <p>Price: {property.price}</p>
          <p>Location: {property.location}</p>
          <img src={property.img} alt={property.title}/>
        </div>
      ))}
    </div>
  );
};

export default RealEstateRow; // Ensure this line is here
