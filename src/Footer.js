import React from "react";

export default function Footer() {
  return (
    <small className="credits">
      This project is{" "}
      <a
        href="https://github.com/MariaLizMatthaeus/dictionary-app-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-source code
      </a>{" "}
      hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>{" "}
      coded by Maria Matthäus with 🖤 and caring support by{" "}
      <a href="https://www.shecodes.io/">SheCodes</a>
    </small>
  );
}
