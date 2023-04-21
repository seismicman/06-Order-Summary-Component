import React from "react";
import illustration_hero from "../assets/images/illustration-hero.svg";
import icon_music from "../assets/images/icon-music.svg";

const Order = () => {
  return (
    <div className="card">
      <div className="illustration">
        <img src={illustration_hero} alt="illustration-hero" />
      </div>
      <div className="summary">
        <h2 className="title">
          <b>Order Summary</b>
        </h2>
        <p className="description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div className="subscription">
        <img src={icon_music} alt="icon-music" className="icon-music" />
        <div className="plan">
          <p className="duration-plan">
            <b>Annual Plan</b>
          </p>
          <p className="price">$59.99/year</p>
        </div>
        <a href="#" className="change-link">
          Change
        </a>
      </div>
      <div className="buttons">
        <button className="payment">
          <b>Proceed to Payment</b>
        </button>
        <button className="cancel">
          <b>Cancel Order</b>
        </button>
      </div>
    </div>
  );
};

export default Order;
