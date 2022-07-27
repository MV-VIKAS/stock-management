import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  let [toggleStock, setToggleStock] = useState(true);
  return (
    <section className={sidebar.section}>
      <article>
        <h1>DASHBOARD</h1>
        <div>
          <NavLink
            to="/ownerDashboard/stocks"
            onClick={() => {
              setToggleStock(true);
            }}
            className={`${toggleStock === true ? "open" : ""} sidebar`}
          >
            STOCKS
          </NavLink>
          <NavLink
            onClick={() => {
              setToggleStock(false);
            }}
            to="/ownerDashboard/staff"
            className={`${toggleStock !== true ? "open" : ""} sidebar`}
          >
            STAFF
          </NavLink>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;
