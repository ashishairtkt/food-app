import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FilterIcon from "../Assets/Images/filter.svg";

const FilterStrip = ({ setActiveTab, activeTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="scrolltofix">
      <Container>
        <div className="filterStripContainer">
          <div className="leftsideBlock">1321 restaurants</div>
          <div className="rightsideBlock">
            <ul>
              <li
                className={activeTab === "Search" ? "" : ""}
                onClick={() => handleTabClick("Search")}
              >
                {" "}
                <i className="fa-solid fa-magnifying-glass search-icon"></i>{" "}
                &nbsp;Search
              </li>
              <li
                className={activeTab === "Relevance" ? "active" : ""}
                onClick={() => handleTabClick("Relevance")}
              >
                Relevance
              </li>
              <li
                className={activeTab === "DeliveryTime" ? "active" : ""}
                onClick={() => handleTabClick("DeliveryTime")}
              >
                Delivery Time
              </li>
              <li
                className={activeTab === "Rating" ? "active" : ""}
                onClick={() => handleTabClick("Rating")}
              >
                Rating
              </li>
              <li
                className={activeTab === "LTOH" ? "active" : ""}
                onClick={() => handleTabClick("LTOH")}
              >
                Cost: Low To High
              </li>
              <li
                className={activeTab === "HTOL" ? "active" : ""}
                onClick={() => handleTabClick("HTOL")}
              >
                Cost: High To Low
              </li>
              <li
                className={activeTab === "Filters" ? "" : ""}
                onClick={() => handleTabClick("Filters")}
              >
                Filters
                <span>
                  <img src={FilterIcon} alt="logo" />
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilterStrip;
