import React from "react";

export default function FunctionCompoenet() {

  //No tiene constructor de estado


  
  const onChangeHandler =(evento) => {
    this.setState({ seleccion: evento.target.value }); 
  }

  return (
    <div className="container row">
      <div className="form-check">
        <h1>Componente Funcional</h1>
        <h2>Selecciona una opción:</h2>
        <div onChange={onChangeHandler}> {/* Invoca el metodo */}
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
      {/* asi accedemos a la info del estado, solo si hay un valor dentro del estado. */}
      {this.state.seleccion && (<h2> Seleccionaste: {this.state.seleccion}</h2>)}
    </div>
  );
}