import React, { useState } from 'react';
import useCustomForm from '../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import logo from '../img/logo.svg';
import api from '../config/api';
import axios from 'axios';


const schema = yup.object().shape({
    pass: yup.string().required("La contraseña es obligatoria").min(8, "La contraseña debe tener un mínimo de 8 caracteres"),
    mail: yup.string().email("Ingrese una direccion de correo válida").required("El correo es obligatorio"),
});

const MuroIngreso = (props) => {
    
    const [values, handlerInput] = useCustomForm();
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    const [muro, setMuro] = useState(false);
    const [pope, setPope] = useState();
    
    const load =()=>{
        let timerInterval
        Swal.fire({
        title: 'Cargando tus datos',
        html: ' <b></b> ',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const url_back= process.env.REACT_APP_URL_BACKEND
    const login = async () => {
        
        try{
            setResult(await axios.post(`${url_back}/auth/login`, values));
            console.log(result);
            /* window.localStorage.setItem("Habilitado", result.data.info.habilitado); */
            window.localStorage.setItem("token", result.data.jwt);
            Swal.fire({
                title: '¡Biernvenido!',
                icon: 'success',
                confirmButtonText: 'Ok',
                timer: 3000
            });
        } catch (err) {
            setError(true);
            Swal.fire({
                title: 'Ups!',
                text: 'Por favor, indentá de nuevo',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
        console.log(error);
    };

    const searchMuro = async ()=>{
        try{
        const consulta =await api.get(`/perfil`);
        if(consulta){setMuro(true)}
        }
        catch{setMuro(false)
        }
    };
    searchMuro()
    console.log("así está el muro: ", muro)

    const searchPathname = async ()=>{
        setPope(await window.localStorage.getItem('pathname'))
    }
    searchPathname()
    console.log(pope)

    const redirect=()=>{
         window.location.href='/registro';  
    }
        
    if(pope==="/registro" || pope==="/users/verify/:uuid"){
        return(
            null
        )
    
    } else if(!muro){
        return(  
            <div className="caratula_muro">
                
                <div className="muro">
                    <div className="login_muro">
                    <img src= {logo} alt="" className="login_logo"/>
                        <div className="col-12">
                            <form onSubmit={handleSubmit(login)}>
                                <div className="form-group mt-3">
                                    <input {...register("mail")} type="email" name="mail" placeholder="Ingresá tu mail" className="form-control" onChange={handlerInput} />
                                    {errors.mail ? <p className="text-danger">{errors.mail.message}</p> : null}
                                </div>
                                <div className="form-group mt-3">
                                    <input {...register("pass")} type="password" name="pass" placeholder="Ingresá tu contraseña de Canal 7" className="form-control" onChange={handlerInput} />
                                    {errors.pass ? <p className="text-danger">{errors.pass.message}</p> : null}
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={load}  >Ingresar</button>
                                </div>
                                <div className="login_registro">
                                <div className="d-grid gap-2 mt-3">
                                 <button type="button"  className="btn btn-success boton" onClick={redirect} > Registrarse</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )

    } else{
        return (
                null
        )
    }       
};
     
export default MuroIngreso;

/* <Link to="/registro" className= " login_registro_text"></Link> */