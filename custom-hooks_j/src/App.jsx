import {useState} from "react";
//import axios from "axios";
import {useFetchUsers} from "./hooks/useFetchUsers"

export const App=()=> {
  // 사용자 정의 훅 사용
  // 함수를 실행하고 반환 값을 분할 대입해서 전달
  const {userList,isLoading,isError,onClickFetchUser} = useFetchUsers();


  return(
      <div>
        <button onClick={onClickFetchUser}>누르쇼</button>
        {/*에러 발생 시 에러 메세지 표시*/}
        {isError && <p style={{color:"red"}}>삐이ㅃ이삐이이ㅣ입이ㅣㅇ빕이</p>}
        {/*로딩 시 표시 전환*/}
        {isLoading ? (<p>데이터 가져오는 중</p>) : (
            userList.map(user=>(<p key={user.id}>{`${user.id} : ${user.name}(${user.age}세)`}</p>))

        )}
      </div>
  )
}
