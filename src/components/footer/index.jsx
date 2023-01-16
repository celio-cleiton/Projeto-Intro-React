import React from "react";
import { FooterContainer, Copyright, DeveloperInfo, A } from "./styles";



function Footer() {
    return (
        <FooterContainer>
      <div className="social-media-links">
        <a href="#"><i className="fab fa-facebook-square"></i></a>
        <a href="#"><i className="fab fa-twitter-square"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
      <Copyright>
        Copyright &copy; 2023. All rights reserved.
      </Copyright>
      <DeveloperInfo>
        Developed by <A href="#">Célio Cleiton</A>
      </DeveloperInfo>
    </FooterContainer>
  );
}



export default Footer;