import {useState} from "react";

interface CounterProps {
  initialCount: number;
}

interface Counter {
  count: number;
  increment: () => void;
}

export default function useCounter(
    {initialCount}: CounterProps
): Counter {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  return {count, increment: increment};
}