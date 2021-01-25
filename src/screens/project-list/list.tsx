import React, { FC } from "react";
import { Project, User } from "./index";

interface ListProps {
  list: Project[];
  users: User[];
}

export const List: FC<ListProps> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((person) => project.personId === person.id)?.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
