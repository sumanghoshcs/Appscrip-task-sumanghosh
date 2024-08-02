// src/components/SideMenu.js
import React, { useState } from "react";
import ReactMultiSelect from "../body/ReactMultiSelect";
import "./Menu.css"; // For styling

const SideMenu = (props) => {
  return (
    <div className="side-menu-container">
      {/* <button onClick={toggleMenu} className="menu-toggle-btn">
        {props.isMenuVisible ? "Close" : "Menu"}
      </button> */}
      <div className={`side-menu ${props.isMenuVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <div style={{ width: "53%" }}>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales">CUSTOMIZBLE</label>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "40%" }}>IDEAL FOR </p>
              <ReactMultiSelect />
              {/* <select name="choice" style={{ width: "90%", border: "0px" }}>
                <option value="first" selected>
                  All
                </option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select> */}
            </div>
          </li>

          <li>
            <div>
              <p style={{ width: "40%" }}>OCCASION </p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "27%" }}>WORK</p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "30%" }}>FABRIC </p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "37%" }}>SEGMENT </p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "50%" }}>SUITABLE FOR </p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "55%" }}>RAW MATERIALS</p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <p style={{ width: "35%" }}>PATTERN </p>{" "}
              <select
                name="choice"
                style={{ width: "90%", border: "0px" }}
                defaultValue="first"
              >
                <option value="first">All</option>
                <option value="second">Second Value</option>
                <option value="third">Third Value</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
