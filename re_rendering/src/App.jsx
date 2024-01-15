import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/child1";
import { Child4 } from "./components/child4";

export const App = memo(() => {
  console.log("App랜더링");
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };
  //함수 이모지네이션
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);
  return (
    <>
      <button onClick={onClickButton}>브튼</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
