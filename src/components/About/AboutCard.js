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
            Hi Everyone, I'm <span className="purple" style={{fontSize: "28px"}}>Gul Muazzam Faize </span>
            a code-slinging wizard from <span className="purple"> New Delhi, India.</span>
            <br />
            I recently wrapped up my Master of Computer Application from <span className="purple">Chandigarh University</span> and before that, I was crunching numbers with a Bachelor of Commerce from <span className="purple">Delhi University.</span>
            <br />
            At <span className="purple">R Cube Consulting Inc.</span> As a Frontend Developer Intern, I jazzed up user interfaces with React, making them sleek and snappy. I teamed up Axios with Node.js to chat with PostgreSQL, making CRUD ops a breeze and keeping the data flowing smoothly.
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
