//useMemoList.ts

import { memo, useCallback, useState } from "react";

//메모 목록에 관한 사용자 정의 훅
export const useMemoList = () => {
  //메모목록  state
  const [memos, setMemos] = useState<string[]>([]);

  //메모추가로직
  const addTodo = useCallback(
    (text: string) => {
      //상태변경을 감지하는 새로운 배열 생성
      const newMemos = [...memos];
      //텍스트 박스 입력 내용을 메모 배열에 추가
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  //메모삭제 로직
  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
