import React, { useEffect, useReducer, useState } from 'react';
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd';
import TableContact from './TableContact';

const init = () => {
  const contactos = localStorage.getItem("contactos");
  //console.log(contactos);
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  //const [state, dispatch] = useReducer(ContactosReducer, []);

  const [state, dispatch] = useReducer(ContactosReducer, [], init);
  //console.log(state);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state))
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <div>
        <div className="row">
          <div className="col-6 my-2">
            <h1>Lista de Contactos: 0</h1>
          </div>
          <div className="col-6">
            <button onClick={() => setFormView(!formView)} className="btn btn-success mx-4 my-3">
              {!formView ? "+ Agregar Contacto" : "> Cerrar Formulario"}
            </button>
            {formView && <FormularioAdd dispatch={dispatch} />}
          </div>
        </div>
      </div>

      <TableContact contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contactos
