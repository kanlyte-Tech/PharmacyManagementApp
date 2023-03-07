import React from "react";
import MainHeader from "../header/MainHeader";
const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;