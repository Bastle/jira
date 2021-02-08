import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: any;
  token?: string;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios 可以直接在返回状态不为 2xx 的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  // TODO TS Utility Types
  // TS 中的 typeof 是在静态环境运行的
  // utility type 的用法：用泛型给它传入一个其他类型，然后 utility type 对这个类型进行某种操作
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

type Person = {
  name: string;
  age: number;
};

// Partial
const xiaoming: Partial<Person> = { name: "xiaoming" };
// Omit
const x: Omit<Person, "name"> = { age: 3 };
const y: Omit<Person, "name" | "age"> = {};

// Readonly

// Pick

const z: Pick<Person, "name"> = { name: "rose" };

// Exclude
type Age = Exclude<keyof Person, "name">;
