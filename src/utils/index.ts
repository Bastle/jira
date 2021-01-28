import { useState, useEffect } from "react";

export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;

export const clearObject = (object: any) => {
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
