import React, { useCallback, useState } from "react";

const CallbackCouter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CallbackCouter;
