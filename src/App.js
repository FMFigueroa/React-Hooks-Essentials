import React from "react";
import MiComponenteFx from './componentes/MiComponenteFx';


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
        <MiComponenteFx />
      </div>
    </div>
  );
}

export default App;
