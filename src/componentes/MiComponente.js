import React, { useEffect, useState } from "react";

export default function Micomponente() {
  const [conteo, setConteo] = useState(1);
  const [opcion, setOpcion] = useState({
    titulo: 1,
    valor: 1,
  });

  useEffect(() => {
    console.log('test');
    document.title= `Conteo: ${conteo}`;
    
  },[/* conteo */]);  
   
  const metodoDidMount = () => {
    setOpcion( {...opcion, titulo: opcion.titulo + 1})
    setConteo( conteo + 1 ) ;
  };

  return (
    <div
      className="container row"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Vincular Effects con propiedades especificas del estado</h1>
      <h3>{`Soy el estado ${opcion.titulo}`}</h3>
      <button onClick={metodoDidMount} style={{
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
    </div>
  );
}
