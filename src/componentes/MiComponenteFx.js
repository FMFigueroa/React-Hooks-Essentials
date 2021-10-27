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
  //Metodo para la Primera propiedad:
  const clickHandler = () => {
    setNombre("Estado Actual")
  }


  return (
    <div className="container row">
      <Opcion name={nombre} clickHandler={clickHandler} />
    </div>
  );
}