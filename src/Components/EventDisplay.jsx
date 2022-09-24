import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "./Styles/event.css";

export const EventDisplay = () => {
  const [eventName, seteventName] = useState();
  const [hostName, sethostName] = useState();
  const [stratDate, setstratDate] = useState();
  const [endDate, setendDate] = useState();
  const [adderss, setadderss] = useState();
  const [file, setFile]= useState();
  useEffect(() => {
    seteventName(localStorage.getItem("event-name"));
    sethostName(localStorage.getItem("host-event"));
    setstratDate(localStorage.getItem("sdate"));
    setendDate(localStorage.getItem("edate"));
    setadderss(localStorage.getItem("address"));
    setFile(localStorage.getItem("files "));
  }, []);
  const nav = useNavigate();

  const handelEdit = () => {
    nav("/create");
  };

  return (
    <div className="e-wrapper">
      <div className="e-left">
        <div className="name">
          <h1 className="eName">{eventName}</h1>
        </div>
        <div className="by">
          <p className="eBy">Hosted by {hostName}</p>
        </div>
        <div className="dates">
          <p className="start"> {moment(stratDate).format("D MMMM, h:mma")}</p>
          <p className="end">
            <span>to</span> {moment(endDate).format("D MMMM, h:mma")}
          </p>
        </div>
        <div className="add">
          <span className="streetLabel">
            Street Name <br />
          </span>
          <span className="street">{adderss}</span>
        </div>
        <div className="image">
          <img src={file} alt="img"  />
        </div>
        {/* <button
          onClick={() => {
            handelEdit();
          }}
        >
          Edit
        </button> */}
      </div>
      <div className="e-right"></div>
    </div>
  );
};
