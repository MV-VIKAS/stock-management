import React from "react";
import "antd/dist/antd.min.css";
import ContextApi from "./api/ContextApi";
import { BrowserRouter } from "react-router-dom";
import Myroutes from "./routes/MyRoutes";
import "./global.css";
const App = () => {
  return (
    <BrowserRouter>
      <ContextApi>
        <Myroutes />
      </ContextApi>
    </BrowserRouter>
  );
};

export default App;
