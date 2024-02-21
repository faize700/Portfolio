import React from "react";
import Typewriter from "typewriter-effect";
 
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Front-End Developer",
          "Freelancer",
          "Programmer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;



















// import React from "react";
// import Typewriter from "typewriter-effect";

// import { useTheme } from "../../ThemeContext";

// function Type() {
//   const { isDarkMode } = useTheme();
//   return (
//     <div
//         className={isDarkMode ? "dark-mode" : "light-mode"}>
//     <Typewriter
//       options={{
//         strings: [
//           "Software Developer",
//           "Front-End Developer",
//           "Freelancer",
//           "Programmer",
//           "Open Source Contributor",
//         ],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//     </div>
//   );
// }
// export default Type;
