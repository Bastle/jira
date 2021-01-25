import { useState, useEffect } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const clearObject = (object: any) => {
  const newObj: any = {};
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

export const useDebounce = (value: any, delay = 2000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
