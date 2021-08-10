import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Isologo from '../img/Isologo.svg';
import { useState} from "react";


const  NavBar= () =>  {

    const [pope, setPope] = useState();

    const searchPathname = async ()=>{
        setPope(await window.localStorage.getItem('pathname'))
    }
    searchPathname()
    
    if(pope==="/registro" || pope==="/login" || pope==="/users/verify/:uuid" || pope==="/loading" ){
        return(
            
            null
        )
    } else{
        return (
            <div className="nav ">
            <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >
                    <img src= {Isologo} alt="" width="60" height="49"/></Link>
                <Link to="/" className="navbar-brand">El Siete</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="bnavbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="" className="nav-link" activeClassName="active" > Home </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle active" href="b" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Programas
                        </a>
                        <ul className="dropdown-menu bg-dark border-white border-top-0  " aria-labelledby="navbarDropdown">
                        <li><Link to="/hola_mendoza" className="dropdown-item text-white">Hola Mendoza</Link></li>
                        <li><Link to="/mejor_maniana" className="dropdown-item text-white">Mejor de Mañana</Link></li>
                        <li><Link to="/desde_redaccion" className="dropdown-item text-white">Desde la Redacción</Link></li>
                        <li><Link to="/septimo_dia" className="dropdown-item text-white">Séptimo Día</Link></li> 
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="b" tabindex="-1"   aria-disabled="true">Grilla de programación</a>
                    </li>
                    <li className="nav-item">
    
                        <a className="nav-link disabled" href="b" tabindex="-1"   aria-disabled="true">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a href="b" className="nav-link disabled"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="b" className="nav-link disabled"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="b" className="nav-link disabled"><i className="fab fa-twitter"></i></a>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div> 
        )
    }
        
     
}


 
export default NavBar ;