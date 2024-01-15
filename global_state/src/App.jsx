//App.jsx

import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { useContext } from "react";
export const App = () => {
  // const [isAdmin, setIsAdmin] = useState(false);
  //Context안의 isAdmin과 수정하는 함수를 얻는다.
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  //[전환]클릭시
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>관리자입니다.</span> : <span>관리자가 아닙니다.</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
