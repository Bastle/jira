import React, { useState } from "react";
import { useDebounce } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { useProject } from "utils/project";
import { useUsers } from "utils/user";

export interface Project {
  id: number;
  name: string;
  personId: string;
  pin: string;
  organization: string;
  created: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

export interface Param {
  name: string;
  personId: string;
}

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  // const [list, setList] = useState([]);
  // const [users, setUsers] = useState<User[]>([]);
  const client = useHttp();
  const debouncedParam = useDebounce(param, 1000);

  // const { run, isLoading, error, data: list } = useAsync<Project[]>();
  const { isLoading, error, data: list } = useProject(debouncedParam);
  const { data: users } = useUsers();

  console.log("---- isLoading ---->", isLoading);
  // useEffect(() => {
  //   run(client("projects", { data: clearObject(debouncedParam) }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debouncedParam]);

  // useMount(() => {
  //   client("users").then(setUsers);
  // });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List list={list || []} users={users || []} isLoading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
