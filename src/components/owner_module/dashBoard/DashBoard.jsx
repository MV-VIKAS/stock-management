
import React from "react";
import { Outlet } from "react-router-dom";
import dash from "./DashBoard.module.css";
import Sidebar from "./sidebar/Sidebar";

const DashBoard = () => {
  return (
    <section className={dash.section}>
      <article>
        <div className={dash.container}>
          <div>
            <Sidebar />
          </div>
          <div><Outlet /></div>
        </div>
      </article>
    </section>
  );
};

export default DashBoard;
