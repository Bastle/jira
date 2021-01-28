import { FC } from "react";
import "./App.css";
import { ProjectListScreen } from "screens/project-list/index";
import { TsReactTest } from "screens/try-use-array";
import { LoginScreen } from "screens/login";

const App: FC = () => {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
      {/* <TsReactTest /> */}
    </div>
  );
};

export default App;
