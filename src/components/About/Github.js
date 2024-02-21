import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";

function Github() {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="faize700"
        blockSize={15}
        blockMargin={5}
        color= {isDarkMode ? "#c084f5": "#663399"}
        fontSize={16}
      />
    </Row>
    </div>
  );
}

export default Github;
