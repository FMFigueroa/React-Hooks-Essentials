import React, { useState } from "react";
import Opcion from "./Option";

export default function MiComponenteFx() {
  const [nombre, setNombre] = useState("1");

  const [direccion, setDireccion] = useState({
    pais: "USA",
    estado: "Arizona",
    ciudad: "Springfileld",
  });

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

  const cambio = () => {
    //String
    //setNombre('2');

    //Objeto
    //spread operator accede a todos los elementos de un opjeto y lo replica,
    // se represeenta con tres puntos: "..."
    //setDireccion({...direccion, estado: "Carabobo"})

    //Array
    const newObjeto = {
      name: "Nueva opcion",
      value: "Nuevo valor",
    };

    const actualizado = opciones.map((item) =>
      item.value === 3 ? newObjeto : item
    );
    setOpciones(actualizado);
  };

  //Metodo para mapear una array:
  const listaOpciones = opciones.map(({ name, value }) => (
    <div key={name.replace("", "").toLowerCase()} className="col-md-4">
      <Opcion name={name} clickHandler={cambio} />
    </div>
  ));

  return <div className="container row">{listaOpciones}</div>;
}
