import React, { useContext } from "react";
import { ContextApiProvider } from "../../api/ContextApi";
import Navbar from "./navbar/Navbar";
import LoginForm from "./login/LoginForm";
import RegistrationFrom from "./registration/RegistrationFrom";
import landingPage from "./LandingPage.module.css";

const LandingPage = () => {
  let { loginState } = useContext(ContextApiProvider);
  return (
    <section className={landingPage.LandingPage_body}>
      <div className={landingPage.children_component}>
        <Navbar />
        {loginState ? <LoginForm /> : <RegistrationFrom />}
      </div>
    </section>
  );
};

export default LandingPage;
