import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Card.css";
const EstateCard = ({ estate }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  let cardRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!cardRef.current.contains(e.target)) {
        setShowDetail(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleDetailClick = (e) => {
    e.stopPropagation();
  };
  const closeButton = () => {
    setShowDetail(false);
  };

  return (
    <div className="card" onClick={toggleDetail} ref={cardRef}>
      <div className="card-img-container">
        <img
          src={estate.imageurl.$values[1]}
          alt={estate.name}
          className="card-img"
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{estate.name}</h3>
        <p>
          Area: {estate.area} | Legality: {estate.legality}
        </p>
        <p className="card-price">${estate.prices.$values[0].priceValue}</p>
        <p className="card-text">{estate.address}</p>
      </div>

      {showDetail && <div className="overlay" onClick={toggleDetail}></div>}

      <div
        className={`product-detail ${showDetail ? "active" : "inactive"}`}
        onClick={handleDetailClick}
      >
        <Swiper spaceBetween={0} slidesPerView={1} className="swiper">
          {estate.imageurl.$values.map((picture, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <img
                src={picture}
                alt={estate.name}
                className="card-img-detail"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="detail-content">
          <button className="close-btn" onClick={closeButton}>
            X
          </button>
          <h2 className="card-title">{estate.name}</h2>
          <p className="card-price">${estate.prices.$values[0].priceValue}</p>
          <p>{estate.address}</p>
          <h4>Description</h4>
          {estate.description.$values.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
