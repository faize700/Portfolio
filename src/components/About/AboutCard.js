import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTheme } from "../../ThemeContext";

function AboutCard() {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" , color: isDarkMode? "white": "rgb(0, 0, 0)"}}>
            Hi Everyone, I am <span className="purple" style={{fontSize: "28px"}}>Gul Muazzam Faize </span>
            from <span className="purple" style={{fontSize: "24px"}}> Lucknow, India.</span>
            <br />
            I am currently employed as an intern software developer at R Cube Consulting (an US based Start-up).
            <br />
            I am currently enrolled in the Master of Computer Applications program at Chandigarh University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: isDarkMode ? "rgb(155 126 172)" : "rgb(90, 70, 110)" }}>
            "Code is like humor. When you have to explain it, it’s bad."{" "}
          </p>
          <footer className="blockquote-footer">Cory House</footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AboutCard;
