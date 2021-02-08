import { FC } from "react";
import { Project, User } from "./index";
import { Table } from "antd";
interface ListProps {
  list: Project[];
  users: User[];
}

export const List: FC<ListProps> = ({ list, users }) => {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      sorter: (a: Project, b: Project) => a.name.localeCompare(b.name),
    },
    {
      title: "负责人",
      render: (_: any, project: Project) => {
        return (
          <span>
            {users.find((person) => project.personId === person.id)?.name}
          </span>
        );
      },
    },
  ];
  return <Table pagination={false} columns={columns} dataSource={list} />;
};
