import React from "react";
import { Data } from "../helpers/Data";
import { MenuItem } from "@mui/material";
import "../styles/Menu.css";
function Ant() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Antrenörlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.nama}
              content={menuItem.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Ant;
