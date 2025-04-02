import React, { useRef, useState } from 'react'

export const Assign7 = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    function handleCount() {
        setCount(count => count + 1);
    }
    renderCount.current = renderCount.current + 1;
  return (
    <div>
        <p>rendering times {renderCount.current}</p>
        <button onClick={handleCount}>{count} + one</button>
    </div>
  )
}
