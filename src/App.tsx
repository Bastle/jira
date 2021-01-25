import React, { FC } from "react";
import "./App.css";
import { ProjectListScreen } from "screens/project-list/index";

const App: FC = () => {
  return (
    <div className="App">
      <ProjectListScreen />
    </div>
  );
};

export default App;
