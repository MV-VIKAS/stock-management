import React, { useContext } from "react";
import { ContextApiProvider } from "../../../api/ContextApi";
import navbar from "./Navbar.module.css";

const Navbar = () => {
  let { setLogin, setRegister } = useContext(ContextApiProvider);
  let handleLoginClick = () => {
    setLogin(true);
    setRegister(false);
  };
  let handleRegisterClick = () => {
    setRegister(true);
    setLogin(false);
  };
  return (
    <section className={navbar.navbar_component}>
      <article>
        <div className={navbar.logo}>
          <img
            src="https://www.thewarehousegroup.co.nz/download_file/2633/576"
            alt="warehouse"
          />
        </div>
        <div className={navbar.auth}>
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleRegisterClick}>SignUp</button>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
