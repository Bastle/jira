import { FC } from "react";
import "./App.css";
import { TsReactTest } from "screens/try-use-array";
import { useAuth } from "context/auth-context";
import AuthenticatedApp from "authenticated-app";
import UnauthenticatedApp from "unauthenticated-app";

const App: FC = () => {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
};

export default App;
