import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full bg-white-100">
      <p class="flex-grow-1 font-bold bg-white text-xl">{count}</p>
      <Button onClick={() => setCount(count + 1)}>send your love</Button>
    </div>
  );
}
