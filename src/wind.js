import React from "react";
import "./Wind.css";

export default function Wind(props) {
  return (
    <div className="Wind">
      <ul>
        <li>
          Wind : <span className="value"> {props.value}km/hr </span>
        </li>
      </ul>
    </div>
  );
}
