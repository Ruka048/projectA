import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="img-container">
        <img src="public/hero4.jpg" alt="" className="hero-pic" />
      </div>
      <div className=" flexCenter hero-container ">
        <h1>Let's find a home that perfect for you</h1>
        <form role="search" className="search-form">
          <input
            id="search"
            type="search"
            placeholder="Enter the address, city, ZIP code..."
          />
          <button type="submit" className="search-button">
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
