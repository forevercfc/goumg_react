//css내부선언방식에서는 속성명에 -를 사용하지 않고 camelCase로 작성한다.
export const ColoredMessage = (props) => {
  console.log(props);
  //props 분할대입 destructuring assigment 여부
  // destructuring;를 한다 안한다 결정할 것
  const { color, children } = props;

  const constStyle = {
    // color: "blue",
    // color: props.color,
    // color: color,
    color,
    fontSize: "20px",
  };
  //return <p style={constStyle}>{props.message}</p>;
  //   return <p style={constStyle}>{props.children}</p>;
  return <p style={constStyle}>{children}</p>;
};
