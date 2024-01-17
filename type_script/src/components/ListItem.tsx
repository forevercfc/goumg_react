//Listitem.tsx
import type { User } from "../types/user";
import type { FC } from "react";

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor, hobbies } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name} ({age}) [{"취미 : " + hobbies?.join("/")}]
    </p>
  );
};
