import React from "react";
import Micomponente from "./componentes/MiComponente";

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
        <Micomponente/>
      </div>
    </div>
  );
}

export default App;
