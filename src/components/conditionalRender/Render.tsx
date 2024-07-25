import React from "react";

const Render = () => {
  let isLoggedin = true;
  return (
    <div>
      {isLoggedin ? <h1>Welcome to website</h1> : <h1> please login </h1>}
    </div>
  );
};

export default Render;
