import React, { useState } from "react";
import Opcion from "./Option"

export default function MiComponenteFx() {
  
  const [nombre, setNombre] = useState("Estado Inicial");


  return (
    <div className="container row">
      <Opcion name={nombre} clickHandler={ () => {setNombre("Estado Actual")}} />
    </div>
  );
}