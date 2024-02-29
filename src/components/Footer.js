import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../ThemeContext";


function Footer() {
  const { isDarkMode } = useTheme();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Developed by Gul Muazzam Faize</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} GM</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/faize700"
                  // style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer-icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/GulMuazzam"
                  class="footer-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gul-muazzam-faize"
                  class="footer-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gulmuazzam_bin_dr_salman_farsi/"
                  class="footer-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
