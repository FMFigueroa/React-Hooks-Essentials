import React, { useEffect, useState } from "react";

export default function Micomponente () {

  const [nombre,setNombre] = useState(1);

    
  useEffect( ()=> {
    console.log(`Hola soy el useEffect numero ${nombre}`)
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