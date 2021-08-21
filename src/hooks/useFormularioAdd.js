import { useState } from "react";



export const useFormularioAdd = () => {
  const [data, setData] = useState({ nombre: "", numero: "" });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    //console.log(e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }



  return [handleChange, nombre, numero]
}
