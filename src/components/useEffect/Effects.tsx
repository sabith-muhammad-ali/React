import React, { useEffect, useState } from "react";

const Effects = () => {
  const [counter, setCounter] = useState<number>(0);
  const [counter1, setCounter1] = useState<number>(0);

  useEffect(() => {
    console.log("side effects");
  },[counter]);

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <div>
        <h1>{counter1}</h1>
        <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      </div>
    </div>
  );
};

export default Effects;


// useEffectil oru dependency illangil == Runs the effect every time the component renders
// empty array ann dependency engli == Runs the effect only once, after the initial render.
// array yill dependency undagill == Runs the effect when specified dependencies change. 