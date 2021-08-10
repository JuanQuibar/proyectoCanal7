import React from 'react';
import { Link, } from "react-router-dom";
import HolaMendoza from '../homeComponents/HolaMendoza';
import MejorDeMañana from '../homeComponents/MejorDeMañana';
import DesdeRedaccion from '../homeComponents/DesdeLaRedaccion';
import SeptimoDia from '../homeComponents/SeptimoDia';
import ParaTodo from '../homeComponents/ParaTodo';
import EnVivo from '../homeComponents/EnVivo';

const Home = (props) => {
    window.localStorage.setItem("pathname", props.location.pathname);
    
    const back= ()=>{
        window.localStorage.setItem('back', props.location.pathname )
    }
    back()
    
    return (
        <>
        <EnVivo />
        <div className="container">

            <div className="container-fluid">
                <div className="cabezal">
                    <h4 className="titulo_programa">Hola Mendoza </h4> 
                    <Link to="/hola_mendoza" className="link_tit_progr small" > VER MÁS </Link> 
                </div>
                <HolaMendoza props={props} cantidad="4" class_col_bootstrap="3" />
            </div>
            
            <div className="container-fluid">
                <div className="cabezal">
                    <h4 className="titulo_programa">Mejor de Mañana </h4> 
                    <Link to="/mejor_maniana" className="link_tit_progr small" > VER MÁS </Link> 
                </div>
                <MejorDeMañana props={props} cantidad="4" class_col_bootstrap="3" />
            </div>

            <div className="container-fluid">
                <div className="cabezal">
                    <h4 className="titulo_programa">Desde la Redacción </h4>
                    <Link to="/desde_redaccion" className="link_tit_progr small" > VER MÁS </Link> 
                </div>
                <DesdeRedaccion props={props} cantidad="4" class_col_bootstrap="3" />
            </div>

            <div className="container-fluid">
                <div className="cabezal">
                    <h4 className="titulo_programa">Séptimo Día </h4> 
                    <Link to="/septimo_dia" className="link_tit_progr small" > VER MÁS </Link> 
                </div>
                <SeptimoDia props={props} cantidad="4" class_col_bootstrap="3" />
            </div>

            <div className="container-fluid">
                <div className="cabezal">
                    <h4 className="titulo_programa">Pará Todo </h4> 
                    <Link to="/para_todo" className="link_tit_progr small" > VER MÁS </Link> 
                </div>
                <ParaTodo props={props} cantidad="4" class_col_bootstrap="3" />
            </div>
 
            

        </div>
        </>
        );
}
 
export default Home ;