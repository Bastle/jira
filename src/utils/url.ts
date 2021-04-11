import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useUrlQueryParamTest = (key?: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  if (key) {
    return [searchParams.get(key), setSearchParams] as const;
  }

  return [
    Array.from(searchParams.entries()).reduce((prev, [key, value]) => {
      return { ...prev, [key]: value };
    }, {} as { [key in string]: string }),
    setSearchParams,
  ] as const;
};

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return [
    useMemo(
      () =>
        keys.reduce(
          (prev, key) => ({ ...prev, [key]: searchParams.get(key) || "" }),
          {} as { [key in K]: string }
        ),
      [searchParams]
    ),
    setSearchParams,
  ] as const;
};
