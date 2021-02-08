import React, { FC } from "react";
import { User, Param } from "./index";
import { Input, Select } from "antd";
interface SearchPanelProps {
  param: Param;
  users: User[];
  setParam: React.Dispatch<React.SetStateAction<Param>>;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  param,
  setParam,
  users,
}) => {
  return (
    <form action="">
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <Select
          value={param.personId}
          onChange={(value) => setParam({ ...param, personId: value })}
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};
