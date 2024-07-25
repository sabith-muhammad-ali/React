import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const result = useMemo(() => {
        return count * 123456765 * 8765434567
    }, [count])

  return (
    <div>
      <p>Count:{count}</p>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter
