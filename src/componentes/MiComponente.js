import React, { useEffect, useState } from "react";

export default function Micomponente() {
  const [conteo, setConteo] = useState(1);
  const [opcion, setOpcion] = useState({
    titulo: "texto",
    valor: 1,
  });

  useEffect(() => {
    console.log('test')
    //setConteo(conteo + 1)
  },[opcion.valor]);

  const metodoUno = () => {
    setOpcion( {...opcion, titulo: opcion.titulo + '.'})
  };
  const metodoDos = () => {
    setOpcion( {...opcion, valor: opcion.valor + 1 })
  };

  return (
    <div
      className="container row"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Vincular Effects con propiedades especificas del estado</h1>
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
