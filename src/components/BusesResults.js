import React from "react";
import { useNavigate } from "react-router-dom";

const BusesResults = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="row bg-light m-3 p-2 text-center d-flex justify-content-between align-items-center"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate("/book-seat");
      }}
    >
      <h4 className="col-md-3">{props.bus.busName}</h4>
      <div className="d-flex flex-column col-md-3">
        <div>DEPARTURE</div>
        <h4>{props.bus.departureTime}</h4>
      </div>
      <div className="d-flex flex-column col-md-3">
        <div>ARRIVAL</div>
        <h4>{props.bus.arrivalTime}</h4>
      </div>
      <h4 className="col-md-3">{props.bus.ticketPrice}/-</h4>
    </div>
  );
};

export default BusesResults;
