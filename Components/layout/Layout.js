import React from "react";
import Header_2 from "../header/header2";
const Layout = ({ children }) => {
  return (
    <>
      <Header_2 />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;