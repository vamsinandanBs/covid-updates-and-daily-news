import React from "react";

const ShareButton = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large blue-grey">
          <i className="large material-icons">share</i>
        </button>

        <ul>
          <li>
            <a
              href="mailto:saurabhsonde111@gmail.com"
              className="btn-floating blue"
            >
              <i className="material-icons">mail</i>
            </a>
          </li>
          <li>
            <a
              href="whatsapp://send?text=https://trackthecovid19.netlify.app/"
              className="btn-floating orange"
            >
              <i className="material-icons">share</i>
            </a>
          </li>
          <li>
            <a className="btn-floating modal-trigger" href="#modal1">
              <i className="material-icons">report</i>
            </a>
          </li>
        </ul>
      </div>

      <div id="modal1" className="modal" style={{ textAlign: "center" }}>
        {" "}
        <div className="modal-content">
          {" "}
          <h4>Report Bug!</h4>
          <p>Let me know if there is any issue in app.</p>
          <p>Click the below button to report your issue.</p>
          <div className="modal-footer" style={{ textAlign: "center" }}>
            <a
              href="mailto:vamsinandan40@gmail.com"
              className="modal-close waves-effect waves-green btn blue-grey"
            >
              Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
