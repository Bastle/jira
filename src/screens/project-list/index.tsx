import React, { useState, useEffect } from "react";
import qs from "qs";
import { clearObject, useDebounce, useMount } from "../../utils";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";

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

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState<User[]>([]);

  const debouncedParam = useDebounce(param, 1000);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(clearObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
