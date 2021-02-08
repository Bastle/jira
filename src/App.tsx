import { FC } from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import AuthenticatedApp from "authenticated-app";
import UnauthenticatedApp from "unauthenticated-app";

const App: FC = () => {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp user={user} /> : <UnauthenticatedApp />}
    </div>
  );
};

export default App;
