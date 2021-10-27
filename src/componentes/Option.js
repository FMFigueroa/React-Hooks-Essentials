import React from "react";

export default function Option(props) {
  return (
    <div className="card">
      <div className="card-header">Este es Sub-Componente que comparte una propiedad</div>
      <div className="card-body">
        <h5 className="card-title">Esta propiedad compartida tiene un estado inicial llamado: "{props.name}"</h5>
        <p className="card-text">Esta propiedad tiene un "{props.name}" viaja por props, desde el Componente Padre hasta el componente Hijo</p>
        <button onClick={props.clickHandler} className="btn btn-primary">Cambiar estado</button>
      </div>
    </div>
  );
}
