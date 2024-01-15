//AdminFlagProvider.jsx

import { useState } from "react";
import { createContext } from "react";
export const AdminFlagContext = createContext({});
//빈 객체를 createContext()함수의 매개변수로 디폴트값 설정

export const AdminFlagProvider = (props) => {
  const { children } = props;
  //관리자 플래그
  //   const smplobj = { sampleValue: "테스트" };
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    //Context의 객체로서  isAdmin, setIsAdmin을 설정
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
    // provider컴포넌트는 value라는 props를 설정가능, 여기에 글벌로관리할 실제값을 전달.
  );
};
