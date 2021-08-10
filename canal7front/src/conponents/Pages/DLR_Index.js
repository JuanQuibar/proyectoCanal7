import React from 'react';
import DesdeRedaccion from '../homeComponents/DesdeLaRedaccion';

const DLR_Index = (props) => {
    window.localStorage.setItem("pathname", props.location.pathname);

    const back= ()=>{
        window.localStorage.setItem('back', props.location.pathname )
    }
    back()

    return (
        <div className="container">

            <div className="container-fluid">
                <h4 className="display-3 text-white titulo_seccion">Desde la Redacción</h4>
                <DesdeRedaccion props={props} cantidad="24" class_col_bootstrap="4" />
            </div>

        </div>
      );
}
 
export default DLR_Index;