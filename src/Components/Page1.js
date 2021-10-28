import React from "react";

import { Footer } from './Footer';
import ReactLogo from "../images/react-logo.png";
import ReduxLogo from "../images/redux-logo.png";
import MongoDBLogo from "../images/mongodb-logo.png";
import PhotoshopLogo from "../images/photoshop-logo.png";

export const Page1 = () => {
  return (
    <>
      <span className="header">
        <span className="header1">Gordon Maloney</span>
        <br />
        <span className="header2">full-stack web development</span>
      </span>

      <p className="subhead">
        With more than 5 years experience using digital technology to campaign
        and influence, I find tech solutions for problems - with a key focus on
        user experience.
      </p>

      <div className="stack-logos">
        <img className="logo-img hvr-grow" src={ReactLogo} alt="React" />
        <img className="logo-img hvr-grow" src={ReduxLogo} alt="Redux" />
        <img className="logo-img hvr-grow" src={MongoDBLogo} alt="MongoDB" />
        <img className="logo-img hvr-grow" src={PhotoshopLogo} alt="Photoshop" />
      </div>

      <Footer />
    </>
  );
};
