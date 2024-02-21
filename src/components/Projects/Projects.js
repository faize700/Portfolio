import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Parallex from "../../Assets/Projects/Parallex.png";
import JokeIMG from "../../Assets/Projects/Joke-IMG.png";
import Gallery from "../../Assets/Projects/Gallery.png";
import Calculator from "../../Assets/Projects/Calculator.png";
import Usability from "../../Assets/Projects/Usability.png";
import { useTheme } from "../../ThemeContext";

function Projects() {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: isDarkMode ? "white" : "rgb(0, 0, 0)" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Parallex}
                isBlog={false}
                title="Parallex-website"
                description="I  have created parallax scrolling effect, both the foreground and background are moving, but the backgroundtypically moves much more slowly, giving the illusion of depth."
                ghLink="https://github.com/faize700/Parallex-website"
                demoLink="https://faize700.github.io/Parallex-website/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={JokeIMG}
                isBlog={false}
                title="Joke-Generator"
                description="This project creates a whimsical web app, the 'Joke Generator' using HTML, CSS, and JavaScript. It fetches randomdad jokes from an API, delighting users with a simple click."
                ghLink="https://github.com/faize700/Joke-Generator"
                demoLink="https://faize700.github.io/Joke-Generator/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Calculator}
                isBlog={false}
                title="Calculator"
                description=" I crafted a sleek calculator using HTML, CSS, and JavaScript to refine my web development skills and deepen my understanding of JavaScript fundamentals. This project served as a practical learning experience, enhancing my proficiency in JavaScript for handling mathematical operations and DOM manipulation."
                ghLink="https://github.com/faize700/Calculator"
                demoLink="https://faize700.github.io/Calculator/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Usability}
                isBlog={false}
                title="UsabilityHub Clone"
                description="I developed a clone of UsabilityHub, a platform for user testing and usability surveys, to showcase my front-end development skills. This project, built with HTML, CSS, and TailwindCSS, demonstrates my ability to replicate detailed web interfaces and apply design principles effectively."
                ghLink="https://github.com/faize700/Clone-of-Usability-Hub"
                demoLink="https://faize700.github.io/Clone-of-Usability-Hub/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Gallery}
                isBlog={false}
                title="Gallery-Layout"
                description="The creation of a Gallery Layout project was primarily focused on advancing my CSS skills. Each image within the grid initially appears in grayscale, but upon hover, it transitions to its full color, accompanied by text overlaid on the image. This project provided an excellent opportunity to explore CSS techniques for image manipulation and interactivity."
                ghLink="https://github.com/faize700/Gallery-Layout"
                demoLink=" https://faize700.github.io/Gallery-Layout/"
                //  <--------Please include a demo link here
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
