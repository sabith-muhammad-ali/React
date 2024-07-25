import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>about page</h1>
      <Link to="/">
        <h1>home</h1>
      </Link>
    </div>
  );
};

export default About;
