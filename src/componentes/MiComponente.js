import React, { useEffect, useState } from "react";

export default function Micomponente () {

  const [nombre,setNombre] = useState(1);

  //el effect lo podemos utilizar para tareas donde no vamos modificaar el estado. 
  useEffect( ()=> {
    console.log(`Hola soy el useEffect numero ${nombre}`)
    document.title =  nombre>= 2 ? `effect (${nombre})`: `effect ${nombre}`;

  })

  const metodo = () => {
    setNombre(nombre +1)
  }

    return (
      <div className="container row" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <h1>{`Hola soy el useEffect numero ${nombre}`}</h1>
        <button onClick={metodo} >Add useEffect</button>
      </div>
    );
}  