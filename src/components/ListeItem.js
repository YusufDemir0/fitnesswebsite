import React, { useState, useEffect } from "react";
import ryanImage from "../assets/ryan.jpeg";
import "../styles/Menu.css";
import { AddAnt } from "../firebase/FirebaseProces";
import { db } from "../firebase/FirebaseConfig";
export const ListeItem = (props) => {


  

  return (
    <div className="card ">
      <div className="cardBody">
        <img className="image" src={props.img} alt="liste image" />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="info">{props.info}</p>
          <p className="cardDescription">{props.description}</p>
          
          <button
              type="submit"
              onClick={(e) =>AddAnt(e,props.antid)}
              className="button"
            >
              Talep Ekle
            </button>
        </div>
      </div>
    </div>
  );
};
