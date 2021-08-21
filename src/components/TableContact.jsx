import React from 'react'

const TableContact = ({ contactos = [], dispatch }) => {

  const handleDelete = (id) => {
    //console.log(id);
    const deleteAction = {
      type: "delete",
      payload: id
    };

    dispatch(deleteAction);
  }

  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Número</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((el) => {
          const finalId = el.id.split("-");
          return <tr key={el.id}>
            <th>{finalId[0]}</th>
            <td>{el.nombre}</td>
            <td>{el.numero}</td>
            <td>
              <button onClick={() => handleDelete(el.id)} className="btn btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
        })
        }
      </tbody>
    </table>
  )
}

export default TableContact
