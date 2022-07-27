import React from "react";
import ReactDOM from "react-dom";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card-container">
      <img src={props.imageUrl} className = "card-image"/>
      <div className="card-descp-div">
        <h5>{props.location}</h5>
        <span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h2>{props.title}</h2>
        <h5>
          {props.startDate} - {props.endDate}
        </h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
