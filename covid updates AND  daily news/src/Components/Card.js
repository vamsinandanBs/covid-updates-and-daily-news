import React from "react";

const Card = ({ cases }) => {
  return (
    <div style={{ paddingLeft: "30px", textAlign: "center" }}>
      <div className="row">
        <div className="col s11 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                Total Cases <br />
                {cases.total?.confirmed}
                <br />
                <br />
                Active Cases
                <br />
                {cases.total?.active}
                <br />
                <br />
                Recovered Cases
                <br />
                {cases.total?.recovered}
                <br />
                <br />
                Deaths
                <br />
                {cases.total?.deaths}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
