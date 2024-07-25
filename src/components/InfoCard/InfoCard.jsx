import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const notify =()=>{
    toast("Coming soon")
  }
  return (
    
    <div className="InfoCard">
      <ToastContainer />
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => notify(true)}
          />
          
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>-</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>-</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>-</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
