import {useState} from "react";
import axios from "axios";

export const useFetchUsers=()=>{
    //const [userList,setUserList]=useState([{id:1}]);
    const [userList,setUserList]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser=()=>{
        setIsLoading(true);
        setIsError(false);

        axios.get("https://raw.githubusercontent.com/JEONGjijwan/ctrlA/main/actor.json").then(result=>{
            // 성과 이름을 결합시켜 반환
            const users=result.data.map(user=>({
                id:user.id,
                name:`${user.lastname} ${user.firstname}`,
                age:user.age
            }));
            // 사용자 목록 state 수정
            setUserList(users);
        })
            // 에러가 발생 시 동작 구문
            .catch(()=>setIsError(true))
            // 처리 완료 후 동작 구문
            .finally(()=>setIsLoading(false));
    }
    // 모아서 반환할 객체에 설정
    return{userList,isLoading,isError,onClickFetchUser}
}