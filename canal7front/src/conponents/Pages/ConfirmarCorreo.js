import React from 'react';
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Isologo from '../../img/Isologo.svg'

const ConfirmarCorreo = (props) => {
    window.localStorage.setItem("pathname", props.match.path);
    console.log(props)

    const usuario = useParams();
    const confirmacionCorreo= usuario.uuid;
    console.log ("este es el uuid", confirmacionCorreo);
    const obj ={uuid:confirmacionCorreo}

    const url_back= process.env.REACT_APP_URL_BACKEND
    useEffect(()=>{
        const enviar= async()=>{
            try{
                await axios.post(`${url_back}/users/verify`, obj);
            }
            catch (error){
                console.log(error)
            }
        };
        enviar();

    },)
    
    return (
        <div className= "confirmar_correo">
            <div className="img_confirmar_correo">
            <img src= {Isologo} alt="" className="confirmar_logo"/>
            </div>
            <div className="text_confirmar_correo">
            <h1 className="text-white display-3">Gracias por registrarte</h1>
            <h3 className="text-white">Ya podés ingresar a la página de incicio con tu correo y la contraseña que creaste</h3>
            </div>
        </div>
      );
}
 
export default ConfirmarCorreo;