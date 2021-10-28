import React, { useEffect, useState } from "react"
import { unmountComponentAtNode } from "react-dom";

export default function Micomponente() {
  const [conteo, setConteo] = useState(1);
 

  useEffect(() => {
    console.log('DidMount');
    document.title = `DidMount: ${conteo}`;
  },[]);
  
  useEffect(() => {
    console.log('DidUpdate');
    document.title = `DidUpdate: ${conteo}`;
  });

  useEffect(() => {
    console.log('WillUnmount');
    document.title = 'Componente Montado';

    return () => {
      console.log('Componente Desmontado');
      document.title = 'Componente Desmontado';
    }
  },[]);
   
  const metodo = () => {
    setConteo( conteo + 1 ) ;
  };

  const eliminar = () => {
    unmountComponentAtNode(document.getElementById('root'));
  }

  return (
    <div
      className="container row"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Vincular Effects con propiedades especificas del estado</h1>
      <h3>{`DidUpdate ${conteo}`}</h3>
      <button onClick={metodo} style={{
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
      <button onClick={eliminar} style={{
          marginTop: 20,
          borderRadius: 50,
          backgroundColor: '#5829',
          width: 100,
          padding: 9,
          color:'white',
          //borderWidth:5,
        }}>
        Desmontar
      </button>
    </div>
  );
}
