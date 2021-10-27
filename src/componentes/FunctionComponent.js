import React, { useState } from "react";

export default function FunctionCompoenet() {
  // ======= Hook useState
  //const [getter, setter] = useState('valor inicial'),
  const [seleccion, setSeleccion] = useState("");

  const onChangeHandler = (evento) => {
    //this.setState({ selection: evento.target.value });
    setSeleccion(evento.target.value);
  };

  return (
    <div className="container row">
      <div className="form-check">
        <h1>Componente Funcional</h1>
        <h2>Selecciona una opción:</h2>
        <div onChange={onChangeHandler}>
          {" "}
          {/* Invoca el metodo */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="selection"
              value="1"
            />
            <label className="form-check-label"> Opción 1</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="selection"
              value="2"
            />
            <label className="form-check-label"> Opción 2</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="selection"
              value="3"
            />
            <label className="form-check-label"> Opción 3</label>
          </div>
        </div>
      </div>
      <hr />
      {/* asi accedemos a la info del estado con useState. */}
      {seleccion && <h2> Seleccionaste: {seleccion}</h2>}
    </div>
  );
}