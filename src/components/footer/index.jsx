import React from "react";
import './styles.css'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'
import Facebook from '../../assets/facebook-app-symbol.png'
import Instagram from '../../assets/instagram.png'
import Youtube from '../../assets/youtube.png'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="social-media">
          <div className="Image">
            <img src={Youtube} alt="" />
          </div>
          <div className="Image">
            <img src={Facebook} alt="" />
          </div>
          <div className="Image">
            <img src={Linkedin} alt="" />
          </div>
          <div className="Image">
            <img src={Instagram} alt="" />
          </div>
          <div className="Image">
            <img src={Twitter} alt="" />
          </div>
        </div>
        <div className="conditions">
          <span>Terms of services</span>
          <span className="Terms">Privacy policy</span>
        </div>
        <div className="copyright">
          <span>
            Copyright 2021 @ Peddle Technologies. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
