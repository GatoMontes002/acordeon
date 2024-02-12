import '../acordeon.css'

const AcordeonMulti = ({ data }) => {
  const cliquear = (clave) => {
        let elem = document.getElementById(clave);
        elem.classList.toggle('inactivo')
    }
  return (
    <>
      {data.map((el) => (
        <div id={el.id} className="contenedor-acordeon inactivo" key={el.id} onClick={() => cliquear(el.id)}>
          <div className="titulo">{el.titulo}</div>
          <div className="descripcion">{el.descripcion}</div>
        </div>
      ))}
    </>
  );
};

export default AcordeonMulti;
