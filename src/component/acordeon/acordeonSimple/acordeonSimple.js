import { useState } from 'react';
import '../acordeon.css'

const AcordeonSimple = ({ data }) => {
  const [elemSeleccionado, setElemSeleccionado] = useState(null)

  const cliquear = (clave) => {
        setElemSeleccionado(clave)
    }
  return (
    <>
      {data.map((el) => (
        <div id={el.id} className="contenedor-acordeon" key={el.id} onClick={() => cliquear(el.id)}>
          <div className="titulo">{el.titulo}</div>
          {(elemSeleccionado) && (elemSeleccionado===el.id) && <div className="descripcion">{el.descripcion}</div>}
        </div>
      ))}
    </>
  );
};

export default AcordeonSimple;