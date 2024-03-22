import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EstateCard from "./EstateCard.jsx";
import "./Card.css";

function fetchData() {
  return fetch("http://realestateapi.somee.com/api/RealEstates")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response was not OK!");
      }

      return response.json();
    })
    .catch((err) => {
      console.error("Error Fetching Data", err);
    });
}

function RealEstatesSection({ title }) {
  const [realEstates, setRealEstates] = useState([]);
  useEffect(() => {
    const Data = async () => {
      const jsonData = await fetchData();
      setRealEstates(jsonData.$values);
    };

    Data();
  }, []);

  return (
    <div className="realEstate-container">
      <h1 className="list-title">{title}</h1>
      <div className="card-container">
        {realEstates.map((estate) => (
          <EstateCard key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  );
}

export default RealEstatesSection;
