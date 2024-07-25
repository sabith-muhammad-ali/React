import React, { useState } from "react";
import Chaild from "./Chaild";

const Parent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Chaild count={count} />
    </div>
  );
};

export default Parent;
