import { useState, useEffect } from "react";

export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const clearObject = (object: {
  [propName: string]: string | number;
}) => {
  const newObj: { [propName: string]: string | number } = {};
  Object.keys(object).forEach((key) => {
    if (!isFalsy(object[key])) {
      newObj[key] = object[key];
    }
  });
  return newObj;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO 依赖项里加上 callback 会造成无限循环，这个和 useCallback 以及 useMemo 有关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <S>(value: S, delay = 2000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <T>(initialValue: T[]) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    },
    add: (item: T) => {
      setValue(value.concat(item));
    },
  };
};
