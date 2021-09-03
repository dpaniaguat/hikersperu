import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import HeaderCinta from "./HeaderCinta";

import "./sass/Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
    <div className="layout">
      {/* <HeaderCinta /> */}
      <Header />
      <div className="container"></div>
      <Footer />
    </div>
   
    </>
  );
};

export default Layout;
