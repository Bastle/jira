import { useMemo, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { clearObject } from "utils";

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [params] = useState(searchParams)
  return [
    useMemo(() => {
      return keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParams.get(key) || "" };
      }, {} as { [key in K]: string });
    }, [searchParams]),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = clearObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParams(o);
    },
  ] as const;
};
