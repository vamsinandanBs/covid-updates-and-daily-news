import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer
        className="page-footer blue-grey"
        style={{
          borderRadius: "20px",
          textAlign: "center",
          fontFamily: "'Balsamiq Sans', cursive",
        }}
      >
        <div className="container">
          <div className="row">
            <h4 className="white-text">
              <a
                href="fb://facewebmodal/f?href=https://www.facebook.com/vamsi.nandan.1428vv"
                style={{
                  paddingRight: "25px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://instagram://user?username=vamsinandanbs_1428"
                style={{
                  paddingRight: "20px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/vamsinandanBs"
                style={{
                  paddingRight: "10px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </h4>
            <div className="col l4 offset-l4 s12">
              <h5 className="grey-text text-lighten-4">
                Code with β€ by Vamsinaandan B S
              </h5>
              <h6>
                  Wear a mask.π·
                  Clean your hands.π§Όπ,π§΄π€²
                  Maintain safe distance.π«π€,π«π§βπ€βπ§,π§βοΈπ§
                  Get vaccinatedπ
                
              </h6>
              <h6>Data:-The Ministry of Health and Family Welfare</h6>
              <h6>
                Stay Home Stay Safe{" "}
                <span role="img" aria-label="mask">
                  π·
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="footer-copyright blue-grey">
          <div className="container"> Β© 2021 Vamsinandan B S</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
