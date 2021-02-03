import { ReactNode, FC } from "react";
import { AuthProvider } from "./auth-context";

const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
