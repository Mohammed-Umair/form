import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/home.css";
export const Home = () => {

  const nav = useNavigate()
  return (

    <div className="wrapper">
      <div className="left">
      </div>
      <div className="right">
        <div className="text">
           <span className="text-imagine">Imagine if </span><br/>
           <span className="text-snap">Snapchat</span><br/>
           <span className="text-had">had events.</span>
        </div>
        <div className="des">
           <span >Easily host and share events with your friends across any social media.</span>
        </div>
        <div className="btn">
          <span className="btn-content" onClick={()=> nav("/create")}>Create my event</span>
        </div>
      </div>
    </div>
    
  );
};
