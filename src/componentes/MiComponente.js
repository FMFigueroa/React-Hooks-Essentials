import React, { useEffect, useState } from "react";

export default function Micomponente() {
  const [conteo, setConteo] = useState(0);
  const [opcion, setOpcion] = useState({
    titulo: 1,
    valor: 1,
  });

  useEffect(() => {
    console.log('test')
    setConteo( conteo + 1 ) // se ejecuta una sola vez y luego si cambia el estado de la propiedad opcion espeficicamente el valor.
  },[opcion.valor]);  // esta dependencia rastrea el estado de una propiedad diferente, 
                    //es util para controlar el cambio el estado de otra propiedad de forma controlada.

  const metodoUno = () => {
    setOpcion( {...opcion, titulo: opcion.titulo + 1})
  };
  const metodoDos = () => {
    setOpcion( {...opcion, valor: opcion.valor +1 }) 
    // cuando cabia su estado, useEffect lo detecta y cambia el estado de otra propiedad.
  };

  return (
    <div
      className="container row"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Vincular Effects con propiedades especificas del estado</h1>
      <h3>{`Soy el Effect ${conteo -1 }`}</h3>
      <h3>{`Soy el valor ${opcion.valor}` }</h3>
      <h3>{`Soy el Titulo ${opcion.titulo}` }</h3>
      <button onClick={metodoUno} style={{
          marginTop: 20,
          borderRadius: 50,
          backgroundColor: '#f08e',
          width: 100,
          padding: 9,
          color:'white',
          //borderWidth:5,
        }}>
        Evento 1
      </button>
      <button
        onClick={metodoDos}
        style={{
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: "#ffa500",
          width: 100,
          padding:8,
          color:'black',
          fontSize:15,
          fontWeight:'bold',
          //borderWidth:5,
        }}
      >
        Evento 2
      </button>
    </div>
  );
}
