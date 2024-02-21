// ToggleButton.js
import React from "react";

function ToggleButton({ isDarkMode, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default ToggleButton;
