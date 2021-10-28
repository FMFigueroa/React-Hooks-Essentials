import React, { useEffect } from "react";

export default function Micomponente () {
    
  useEffect( ()=> {
    console.log("useEffect")
  })

  const metodo = () => {

  }

    return (
      <div className="container row">
        <h2 onClick={metodo}>Hook useEffect</h2>
      </div>
    );
}