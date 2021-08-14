import React, { useState } from 'react';
import useCustomForm from '../../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import logo from '../../img/logo.svg';
import Loading from './Loading';

const schema = yup.object().shape({
    pass: yup.string().required("La contraseña es obligatoria").min(8, "La contraseña debe tener un mínimo de 8 caracteres"),
    mail: yup.string().email("Ingrese una direccion de correo válida").required("El correo es obligatorio"),
});

const Registro = (props) => {
     
    window.localStorage.setItem("pathname", props.location.pathname);
    
    const [values, handlerInput] = useCustomForm();
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
        
          
     const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const registro = async () => {
        setLoading(true);
           
        try{ 
            setResult(await axios.post(`http://localhost:9000/registro/new`, values));

            setTimeout(()=>{
                setLoading(false)
            }, 2000)

            setTimeout(()=>{
                Swal.fire({
                    title: 'Vas bien!',
                    text: 'Por favor, andá a tu correo y confirmá la registración',
                    icon: 'info',
                    confirmButtonText: 'Ok',
                    timer: 5000
                });
            }, 2100)
            setTimeout(()=>{
                window.location.href='/';
            },5000)
            
            console.log(result)

        } catch (err) {
            setError(true);
            Swal.fire({
                title: 'Ups! Algo Salio mal...',
                text: 'Por favor, indentá de nuevo',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
        console.log(error);
    };

    if(loading) {
        return(
            <Loading />
        )
    } else {
    
        return (
            <>
            
                <div className="registro">
                    <div className="content_register_logo">
                        <img src= {logo} alt="" className="register_logo"/>
                    </div>
                    <div className="login_muro">
                        <h1>Registrarte</h1>
                        <p className="p_registro">Es rápido y fácil y podrás ver videos exclusivos.</p>
                        <form onSubmit={handleSubmit(registro)}>
                            <div className="form-group mt-3">
                                <input {...register("mail")} type="email" name="mail" placeholder="Ingresá tu mail" className="form-control" onChange={handlerInput} />
                                {errors.mail ? <p className="text-danger">{errors.mail.message}</p> : null}
                            </div>
                            <div className="form-group mt-3">
                                <input {...register("pass")} type="password" name="pass" placeholder="Creá una conraseña para Canal 7" className="form-control" onChange={handlerInput} />
                                {errors.pass ? <p className="text-danger">{errors.pass.message}</p> : null}
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-success" >Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Registro;