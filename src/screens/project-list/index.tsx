import React, { useState, useEffect } from "react";
import { clearObject, useDebounce, useMount } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { useHttp } from "utils/http";

export type Project = {
  id: number;
  name: string;
  personId: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
};

export type Param = {
  name: string;
  personId: string;
};

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState<User[]>([]);
  const client = useHttp();

  const debouncedParam = useDebounce(param, 1000);

  useEffect(() => {
    client("projects", { data: clearObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
