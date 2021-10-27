import React from "react";
import ClassComponent from "./componentes/ClassComponent";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Curso de React Hooks</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
