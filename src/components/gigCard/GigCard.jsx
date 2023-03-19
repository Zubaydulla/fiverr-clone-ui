import { Favorite, Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <Star sx={{ color: "#ffc108" }} />
            <span>{item.star}</span>
          </div>
        </div>
        <div className="details">
          <Favorite sx={{ color: "gray" }} />
          <div className="pricing">
            <span>STARTING AT</span>
            <div className="price">
              <h2>${item.price}</h2>
              <sup>99</sup>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
