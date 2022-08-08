import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import logo from '../../../images/logo.png'
import { LinkedIn } from "@material-ui/icons";
const About = () => {
  const stackoverflow = () => {
    window.location = "https://stackoverflow.com/users/19602290/ujwal-gaonkar";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="Founder"
            />
            <Typography>JUSTBuy</Typography>
            <Button onClick={stackoverflow} color="primary">
              Visit Stackoverflow
            </Button>
            <span> JUSTBuy.co.in
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCNaPKF1SRjTs94UpeYJa6Fw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/ujwal-gaonkar-6746aa1a7/" target="blank">
              <LinkedIn className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;