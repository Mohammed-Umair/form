import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/create.css"

export const CreateEvent = () => {
  const [dataa, setDataa] = useState(JSON.parse(localStorage.getItem("event")));
  const [data, setData] = useState({
    eventName: "",
    hostName: "",
    stratDate: "",
    endDate: "",
    adderss: "",
  });

  const nav = useNavigate();
  const saveEevnt = (e) => {
    e.preventDefault();

    localStorage.setItem("event", JSON.stringify(data));

    nav("/event");
  };
  return (
    <div className="form-container">
    <div className="container">
      <form action="">
        <div>
          <label htmlFor="">Event Name</label>
          <input
            type="text"
            name=""
            value={data.eventName}
            id=""
            onChange={(e) => {
              setData({ ...data, eventName: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">host name</label>
          <input
            type="text"
            name=""
            value={data.hostName}
            id=""
            onChange={(e) => {
              setData({ ...data, hostName: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">event start date</label>
          <input
            type="datetime-local"
            name=""
            value={data.stratDate}
            onChange={(e) => {
              setData({ ...data, stratDate: e.target.value });
            }}
            id=""
          />
        </div>
        <div>
          <label htmlFor="">event end date</label>
          <input
            type="datetime-local"
            value={data.endDate}
            onChange={(e) => {
              setData({ ...data, endDate: e.target.value });
            }}
            name=""
            id=""
          />
        </div>
        <div>
          <label htmlFor="">Addres</label>
          <input
            type="address"
            value={data.adderss}
            onChange={(e) => {
              setData({ ...data, adderss: e.target.value });
            }}
            name=""
            id=""
          />
        </div>
        <button onClick={(e) => saveEevnt(e)}>click</button>
      </form>
    </div>
    </div>
  );
};
