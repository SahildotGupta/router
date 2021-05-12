import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div class="social-container">
    <a href="#" className="linkedIn social foot">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="#" className="facebook social foot">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="#" className="instagram social foot">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href="#" className="twitter social foot">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </div>
);

export default Footer;
