import React from 'react'
import './footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Paathsaala. All Rights Reserved. <br />
          Made with ❤️ by <a href="">Ranvijay Singh</a>
        </p>
        <div className="social-links">
          <a href=""><AiFillFacebook /></a>
          <a href=""><AiFillInstagram /></a>
          <a href=""><BsTwitterX/></a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;