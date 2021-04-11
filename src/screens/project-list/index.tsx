import React, { useState } from "react";
import { useDebounce, useDocumentTitle } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { useProject } from "utils/project";
import { useUsers } from "utils/user";
import { Helmet } from "react-helmet";
import { Test } from "./test";
import { useUrlQueryParam } from "utils/url";

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
  const [, setParam] = useState({
    name: "",
    personId: "",
  });
  // 基本类型可以放到依赖里，组件状态可以放在依赖里；非组件状态的对象/数组，绝不可以放在依赖里
  const [param] = useUrlQueryParam(["name", "personId"]);
  const debouncedParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProject(debouncedParam);
  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <Test />
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      <List list={list || []} users={users || []} isLoading={isLoading} />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
