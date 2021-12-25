import { useState, memo, useCallback, useMemo } from "react";
import "./styles.css";

const Hello = memo((props) => {
  console.log("hello");
  return <div />;
});

export default function App() {
  const [state, setState] = useState(1);

  //when passing this to props child will re render component to stop renderring we use useCallback hook
  const hefc = useCallback(() => {}, []);
  const hefcs = useMemo(() => {
    console.log("im running");
    return "hello";
  }, []);

  return (
    <div className="App">
      <Hello value={hefc} />
      <h1>{state}</h1>
      <h2 onClick={() => setState(state + 1)}>
        Start editing to see some magic happen!
      </h2>
      <div>{hefcs}</div>
    </div>
  );
}
