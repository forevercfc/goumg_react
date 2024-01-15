//Card.jsx
import { EditButton } from "./EditButton";
const style = {
  width: "300px",
  height: "200px",
  background: "lightblue",
  margin: "10px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Card = () => {
  //   const { isAdmin } = props;
  return (
    <div style={style}>
      <p>김이름</p>
      <EditButton />
    </div>
  );
};
