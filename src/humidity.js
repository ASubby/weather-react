import React from "react";
import "./Humidity.css";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <ul>
        <li>
          Humidity :<span className="value"> {props.value}% </span>
        </li>
      </ul>
    </div>
  );
}
