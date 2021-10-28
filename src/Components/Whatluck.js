import React from "react";

import { Container, Row, Col } from "reactstrap";

import Logo from "../images/whatluck-logo.png";

import Screenshot1 from "../images/whatluck-screenshots.png";
import Screenshot2 from "../images/whatluck-screenshots2.png";
import Screenshot3 from "../images/whatluck-screenshots3.png";
import Screenshot4 from "../images/whatluck-screenshots4.png";
import Screenshot5 from "../images/whatluck-screenshots5.png";

import Card from "../images/whatluck/whatluck-card.png";
import ss1 from "../images/whatluck/WLss1.jpg";
import ss2 from "../images/whatluck/WLss2.png";
import ss3 from "../images/whatluck/WLss3.png";
import ss4 from "../images/whatluck/WLss4.png";
import ss5 from "../images/whatluck/WLss5.png";
import ss6 from "../images/whatluck/WLss6.png";
import ss7 from "../images/whatluck/WLss7.png";
import ss8 from "../images/whatluck/WLss8.png";
import ss9 from "../images/whatluck/WLss9.jpg";
import ss10 from "../images/whatluck/WLss10.png";
import ss11 from "../images/whatluck/WLss11.jpg";
import ss12 from "../images/whatluck/WLss12.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const Whatluck = () => {


  const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    autoFocus: true,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 1000,
    swipeScrollTolerance: 5,
});

  const height = "600px"

  return (
    <div
      style={{
        lineHeight: "2.8ch",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Container>
        <Row className="mt-2 mb-5">
          <center>
            <img src={Card} alt="whatLuck" style={{ width: "80%" }} />
          </center>
        </Row>

        <Row className="my-4">
          <Col>
            <center>
              The front-end uses React, Redux, Bootstrap, Material UI and Axios,
              the back-end uses MongoDB, Express and Node.js. There is also an
              app version built with React Native.
            </center>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <center>
              <u>
                <a href="https://whatluck.netlify.app/" target="_blank">
                  It’s live here
                </a>
              </u>
              <br />
              <u>
                <a
                  href="https://github.com/gordonmaloney/whatLuck-mern"
                  target="_blank"
                >
                  And on GitHub here
                </a>
              </u>
            </center>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center my-4">
          <Col xs="12">
            <center>
              This project was awarded with{" "}
              <u>
                <a
                  href="https://www.nucamp.co/graduates/projects"
                  target="_blank"
                >
                  Honors in the NuCamp front-end bootcamp.
                </a>
              </u>
            </center>
          </Col>
        </Row>

        <Row className="justify-content-center my-auto">
          <Col>
          <Carousel
          {...getConfigurableProps()}
            axis="vertical">
                        <img className="screenshot" src={ss2} alt="screenshot" style={{ height: height, width: "auto" }} />
                        <img className="screenshot" src={ss5} alt="screenshot" style={{ height: height, width: "auto" }} />
                        <img className="screenshot" src={ss7} alt="screenshot" style={{ height: height, width: "auto" }} />
                        <img className="screenshot" src={ss10} alt="screenshot" style={{ height: height, width: "auto" }} />
          <img className="screenshot" src={ss1} alt="screenshot" style={{ height: height, width: "auto" }} />
          <img className="screenshot" src={ss3} alt="screenshot" style={{ height: height, width: "auto" }} />
          <img className="screenshot" src={ss8} alt="screenshot" style={{ height: height, width: "auto" }} />
          <img className="screenshot" src={ss9} alt="screenshot" style={{ height: height, width: "auto" }} />
          <img className="screenshot" src={ss11} alt="screenshot" style={{ height: height, width: "auto" }} />
          <img className="screenshot" src={ss12} alt="screenshot" style={{ height: height, width: "auto" }} />
          </Carousel>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

/*

export const Whatluck = () => {
  return (
    <div style={{ lineHeight: "2.8ch", width: '80%', marginLeft: "auto", marginRight: "auto" }}>
      <Container>
        <Row className="mt-2 mb-5">
          <center>
            <img src={Logo} alt="whatLuck logo" style={{ width: "40%" }} />
          </center>
        </Row>
        <Row className="align-items-center">
          <br />
          <Col sm="8">
            whatLuck is a one-stop potluck organising app - to help friends
            coordinate who’s going to bring what to a potluck (or a barbeque, or
            a drinks night, or anywhere you’re eating and drinking).
          </Col>
          <Col>
            <img className="screenshot" src={Screenshot1} alt="screenshot" style={{ width: "100%", transform: 'rotate(6deg)' }} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <img  className="screenshot" src={Screenshot2} alt="screenshot" style={{ width: "100%", transform: 'rotate(-4deg)' }} />
          </Col>
          <Col sm="8">
            The front-end uses React, Redux, Bootstrap, Material UI and Axios,
            the back-end uses MongoDB, Express and Node.js. There is also an app
            version built with React Native.
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <center>
              <u>
                <a href="https://whatluck.netlify.app/" target="_blank">
                  It’s live here
                </a>
              </u>
              <br />
              <u>
                <a
                  href="https://github.com/gordonmaloney/whatLuck-mern"
                  target="_blank"
                >
                  And on GitHub here
                </a>
              </u>
            </center>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <img className="screenshot" src={Screenshot3} alt="screenshot" style={{ width: "100%" }} />
          </Col>
          <Col>
            <img className="screenshot" src={Screenshot4} alt="screenshot" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center my-4">
          <Col xs="12">
            <center>
            This project was awarded with{" "}
            <u>
              <a
                href="https://www.nucamp.co/graduates/projects"
                target="_blank"
              >
                Honors in the NuCamp front-end bootcamp.
              </a>
            </u>
            </center>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center my-4">
          <Col xs="12">
            <center>
            <img className="screenshot" src={Screenshot5} alt="screenshot" style={{ width: "50%" }} />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

*/
