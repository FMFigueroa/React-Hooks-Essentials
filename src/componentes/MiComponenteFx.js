import React, { useState } from "react";
import Opcion from "./Option"

export default function MiComponenteFx() {
  
  const [nombre, setNombre] = useState("Estado Inicial");
  const [opciones, setOpciones] = useState([
    {
      name: "Opción 1",
      value: 1,
    },
    {
      name: "Opción 2",
      value: 2,
    },
    {
      name: "Opción 3",
      value: 3,
    },
  ]);

  //Metodo para mapear una array:
  const listaOpciones = opciones.map(({name, value}) => (
    <div key={name.replace("","").toLowerCase()} className="col-md-4">
      <Opcion name={name}/>
    </div>

  ));

  return (
    <div className="container row">
      {listaOpciones} 
    </div>
  );
}