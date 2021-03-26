import { FC } from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import AuthenticatedApp from "authenticated-app";
import UnauthenticatedApp from "unauthenticated-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallBack } from "components/lib";

const App: FC = () => {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallBack}>
        {user ? <AuthenticatedApp user={user} /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
