"use client";

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter((count) => count + 1)}>{counter}</button>
  );
}

export default Counter;
