import { useState } from 'react';
import AcordeonSimple from './acordeonSimple/acordeonSimple';
import AcordeonMulti from './acordeonMulti/acordeonMulti';

const Acordeon = ({ data }) => {
  const [tipoSimple, setTipoSimple] = useState(true)

  const cambiar = () => {
        setTipoSimple( ! tipoSimple)
        let elem = document.getElementById('miboton')
        if (elem.textContent==='Cambiar a Multi-Opcion')
            elem.textContent='Cambiar a Simple-Opcion'
        else 
            elem.textContent='Cambiar a Multi-Opcion'
    }

  return (
    <>
        <div className='contenedor-acordeon-global'>
            <button id='miboton' onClick={cambiar}>Cambiar a Multi-Opcion</button>
            <div className='contenedor-tipo-acordeon'>
                {(tipoSimple) ? <AcordeonSimple data={data}/> : <AcordeonMulti data={data}/>}
            </div>
        </div>

    </>
  );
};

export default Acordeon;