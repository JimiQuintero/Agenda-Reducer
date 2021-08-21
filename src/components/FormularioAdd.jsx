import { v4 as uuidv4 } from 'uuid';
import { useFormularioAdd } from '../hooks/useFormularioAdd';

const FormularioAdd = ({ dispatch }) => {

  const [handleChange, nombre, numero] = useFormularioAdd()

  const actionAdd = {
    type: "add",
    payload: {
      id: uuidv4(),
      nombre,
      numero
    },
  }

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre: <input
            onChange={handleChange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            autoComplete="off" />
        </label>
        <label className="mx-1 d-grid gap-2">
          Número: <input
            onChange={handleChange}
            name="numero"
            value={numero}
            type="text"
            className="form-control"
            autoComplete="off" />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-info mt-3">Agregar</button>
        </div>
      </div>
    </>
  )
}

export default FormularioAdd
