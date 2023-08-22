import React from "react";

const Error = () => {
  return (
    <main className="error">
      <div className="main-header">
        <div className="line"></div>
        <h2 className="title">404</h2>
        <div className="line"></div>
      </div>
      <p className="subtitle">NOT FOUND</p>
      <button className="btn">Return Home</button>
    </main>
  );
};

export default Error;
