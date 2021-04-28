import React from "react";

const NewsCardHeading = () => {
  return (
    <div
      style={{
        paddingLeft: "5px",
        textAlign: "center",
        fontFamily: "'Balsamiq Sans', cursive",
      }}
    >
      <div className="row">
        <div className="col s12 m12">
          <h3 style={{ color: "#586776" }}>Latest Covid-19 News</h3>
        </div>
      </div>
    </div>
  );
};

export default NewsCardHeading;
