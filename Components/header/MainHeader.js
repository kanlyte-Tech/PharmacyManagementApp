import React from "react";

const MainHeader = () => {

    const logout = async () => {}
  return (
    <div className="--pad __header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">peter</span>
        </h3>
        <button onClick={""} className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};

export default MainHeader;