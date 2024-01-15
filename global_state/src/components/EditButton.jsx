//EditButton.jsx
import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  //Context안의 isAdmin을 얻는다.
  const { isAdmin } = useContext(AdminFlagContext);

  //useContext의 인수에 참조할 Context를 지정 : useContext로 얻은 값에 Context에 설정한 객체가 들어있음을 확인
  const contextValue = useContext(AdminFlagContext);
  console.log(contextValue);

  return (
    <button style={style} disabled={!isAdmin}>
      슈정
    </button>
  );
};
