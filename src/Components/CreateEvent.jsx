import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/create.css";

export const CreateEvent = () => {
  const [eventName, setEventName] = useState();
  const [hostName, setHostName] = useState();
  const [startDate, setStratDate] = useState();
  const [endDate, setEndDate] = useState();
  const [adderss, setAdderss] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    let ename = localStorage.getItem("event-name");
    let hname = localStorage.getItem("host-event");
    let sdate = localStorage.getItem("sdate");
    let edate = localStorage.getItem("edate");
    let addres = localStorage.getItem("address");
    let ffile = localStorage.getItem("files");

    if (ename?.length > 0) {
      setEventName(ename);
    }
    if (hname?.length > 0) {
      setHostName(hname);
    }
    if (sdate?.length > 0) {
      setStratDate(sdate);
    }
    if (edate?.length > 0) {
      setEndDate(edate);
    }
    if (addres?.length > 0) {
      setAdderss(addres);
    }
    if (ffile?.length > 0) {
      setFile(ffile);
    }
  }, []);

  const nav = useNavigate();
  const saveEevnt = (e) => {
    e.preventDefault();

    localStorage.setItem("event-name", eventName);
    localStorage.setItem("host-event", hostName);
    localStorage.setItem("sdate", startDate);
    localStorage.setItem("edate", endDate);
    localStorage.setItem("address", adderss);
    localStorage.setItem("files", file);

    nav("/event");
  };
  return (
    <div className="form-container">
      <div className="container">
        <form action="">
          <div className="inputs">
            <label htmlFor="">Event Name</label>
            <input
              type="text"
              name=""
              value={eventName}
              id=""
              onChange={(e) => {
                setEventName(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Host Name</label>
            <input
              type="text"
              name=""
              value={hostName}
              id=""
              onChange={(e) => {
                setHostName(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Event Start Date</label>
            <input
              type="datetime-local"
              name=""
              value={startDate}
              onChange={(e) => {
                setStratDate(e.target.value);
              }}
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Event End Date</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              name=""
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Addres</label>
            <input
              type="address"
              value={adderss}
              onChange={(e) => {
                setAdderss(e.target.value);
              }}
              name=""
              id=""
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Event Photo</label>
            <input
              type="file"
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
              }}
              name=""
              id=""

            />
          </div>
          <button onClick={(e) => saveEevnt(e)}>Next</button>
        </form>
      </div>
    </div>
  );
};
