import React, { useState, useEffect } from "react";

const MenuSearchHeader = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Adding scroll event listener");
      window.addEventListener("scroll", () => {
        console.log("Scroll event triggered");
        console.log("window.pageYOffset:", window.pageYOffset);
        console.log("Is small:", window.pageYOffset > 200);
        setSmall(window.pageYOffset > 200);
      });
    }
  }, []);
  return (
    <div className="menuContainer">
      <div className="leftmenu">
        <ul>
          <li>
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
