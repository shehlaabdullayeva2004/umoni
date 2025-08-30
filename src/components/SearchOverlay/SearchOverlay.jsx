import React, { useEffect, useState } from "react";
import "./SearchOverlay.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SearchOverlay({ show, onClose }) {
  const [close, setClose] = useState(false);

   useEffect(() => {
     AOS.init({ duration: 400, once: true }); // 1 dəfə animasiya üçün
   }, []);
  
  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      setClose(false)
      onClose();
    }, 400);
  }
  if (!show && !close) return null;

  return (
 
    <div className={`search-overlay ${close ? 'closing':'opening'} `} data-aos="fade-down" >
        <div className="overlay-content d-flex justify-content-center pt-5 ">
          <button className="close-btn text-danger" onClick={handleClose}>
            {" "}
            &times;
          </button>
          <div className="d-flex flex-column">
            <h2>what are you looking for ?</h2>
            <input
              type="text"
              placeholder="Search..."
              
            />
          </div>
        </div>
      </div>
  );
}
