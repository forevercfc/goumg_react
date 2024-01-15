import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {
  //state의 정의
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  //분홍색 스타일
  // const constPinkStyle = {
  //   color: "pink",
  //   fontSize: "30px",
  // };

  //return null;
  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>안녕하세요 리액트입니다.</h1>
      <ColoredMessage color="blue" message="잘지내누?" />

      <ColoredMessage color="green">머?잘지낸다고? </ColoredMessage>
      <ColoredMessage color="pink">ㄴㄴ 몬지낸다고ㅡㅡ </ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
    </>
  );
  //html파일 안에서 자바스크립트를 기술할 때에는 {}안에 기술한다. 함수명에서 ()는 생략
};
