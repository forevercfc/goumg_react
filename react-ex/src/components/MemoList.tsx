//MemoList.tsx

import { FC } from "react";
import styled from "styled-components";
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <Scontanier>
      <p>메모목록</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={index}>
            <SMemoWrapper>
              <p>{memo}</p>
              <SButton
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                삭제
              </SButton>
            </SMemoWrapper>
          </li>
        ))}
      </ul>
    </Scontanier>
  );
};
const SButton = styled.button`
  margin-left: 15px;
`;
const Scontanier = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
