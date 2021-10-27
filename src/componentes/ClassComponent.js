import React, { Component } from "react";

export default class ClassComponent extends Component {
    
  //Estado del componente
  constructor(props) {
    super(props); //crea la herencia de componente
    this.state = { seleccion: "" }; //la propiedad seleccion tiene el valor vacio en el estado inicial.

    
    //.bind(this) es para enlazar el metodo dentro del componente class,
    //inyectandole el valor del estado a traves del this.
    

    //Conecccion del metodo:
    // SI ESTA DENTRO DE UNA FUNCION NO NECESITA  CONECTARLO.
    //this.metodo = this.metodo.bind(this); 
    this.onChangeHandler = this.onChangeHandler.bind(this);
    //.bind(this) conecta con el this.setState, setState es el hace el trabajo dentro del metodo,
    // para redefinir el estado de la propiedad seleccion que pertenece al componente de clase.
  } 

  //===Metodo empleado para cambiar el estado de la propiedad seleccion a traves de un evento.
  //ahora este metodo esta enlazado a esta clase y recive un valor a traves del "evento",
  // para modificar el estado de la propiedad seleccion:
  onChangeHandler(evento) {
    //setState nos permite redifinir el estado, target es el conector entre el evento y el valor que recibe.
    this.setState({ seleccion: evento.target.value }); 
    // this hace referencia a la funcion setState que pertenece a este componente de clase,
    // este this conecta con el this de bind(this).
  }

  render() {
    return (
      <div className="container row">
        <div className="form-check">
            <h1>Componente de Clase</h1>
          <h2>Selecciona una opción:</h2>
          <div onChange={this.onChangeHandler}> {/* onChange rastrea un evento, con el metodo onChangeHandler  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="seleccion"
                value="1"
              />
              <label className="form-check-label"> Opción 1</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="seleccion"
                value="2"
              />
              <label className="form-check-label"> Opción 2</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="seleccion"
                value="3"
              />
              <label className="form-check-label"> Opción 3</label>
            </div>
          </div>
        </div>
        <hr />
        {/* asi accedemos a la info del estado, h2 solo se despliega si hay un cambio estado. */}
        {this.state.seleccion && (<h2> Seleccionaste: {this.state.seleccion}</h2>)}
      </div>
    );
  }
}