import { FC } from "react";
import { User, Project } from "./index";
import { Table } from "antd";
import dayjs from "dayjs";
// react-router  react-router-dom  react react-dom/react-native/react-vr
import { Link } from "react-router-dom";

interface ListProps {
  list: Project[];
  users: User[];
  isLoading?: boolean;
}

export const List: FC<ListProps> = ({ list, users, isLoading = false }) => {
  const columns = [
    {
      title: "名称",
      // dataIndex: "name",
      key: "name",
      sorter: (a: Project, b: Project) => a.name.localeCompare(b.name),
      render(_: string, project: Project) {
        return <Link to={`${project.id}`}>{project.name}</Link>;
      },
    },
    {
      title: "部门",
      key: "organization",
      dataIndex: "organization",
    },
    {
      title: "负责人",
      key: "personId",
      render: (_: string, project: Project) => {
        return (
          <span>
            {users.find((person) => project.personId === person.id)?.name}
          </span>
        );
      },
    },
    {
      title: "创建时间",
      render: (value: any, project: Project) => {
        return (
          <span>
            {project.created
              ? dayjs(project.created).format("YYYY-MM-DD")
              : "--"}
          </span>
        );
      },
    },
  ];
  return (
    <Table
      loading={isLoading}
      pagination={false}
      columns={columns}
      dataSource={list}
      rowKey={(record) => record.name}
    />
  );
};
