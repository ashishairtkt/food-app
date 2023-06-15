import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const MenuSearchHeader = () => {
  return (
    <div className="menuContainer">
      <div className="leftmenu">
        <ul>
          <li>
            {" "}
            <a href="">Home</a>&nbsp;/&nbsp;
          </li>

          <li href="#" className="active">
            RestroName
          </li>
        </ul>
      </div>
      <div className="rightmenu">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
    </div>
  );
};

export default MenuSearchHeader;
