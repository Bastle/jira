import { useAsync } from "./use-async";
import { useEffect } from "react";
import { Project } from "screens/project-list";
import { useHttp } from "./http";
import { clearObject } from "utils";

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...rest } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: clearObject(param || {}) }));
    // .then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return rest;
};
