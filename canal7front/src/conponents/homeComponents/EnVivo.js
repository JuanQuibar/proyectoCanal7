import React from 'react';
import Playing from '../../utils/useVideo';


const EnVivo = () => {
    const idEnVivo = 'RHKccaW5F-I'
    
    return (
        /* <div className="mb-5 en_vivo">
            <h5 className="container-fluid mb-2 tit-en-vivo">→EnVivoAhora</h5>
            <Playing videoId = {idEnVivo}/>
        </div> */
        
    <div className="delimitador_vivo">
        <h5 className=" tit-en-vivo">STREAMING EN VIVO</h5>
        <div className="contenedor_embed">
        <Playing videoId = {idEnVivo} />
        </div>
    </div>

      );
}
 
export default EnVivo;