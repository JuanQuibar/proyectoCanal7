import React, { useState } from 'react';
import useCustomForm from '../../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';


const schema = yup.object().shape({
    // username: yup.string().required("El nombre es obligatorio"),
    pass: yup.string().required("La contraseña es obligatoria").min(8, "La contraseña debe tener un mínimo de 8 caracteres"),
    mail: yup.string().email("Ingrese una direccion de correo válida").required("El correo es obligatorio"),
});
const Login = (props) => {
    console.log("Props de login: ", props)
    // console.log(props.location.pathname)
    // const json = JSON.stringify(props.location.pathname);
    // console.log(json)
    window.localStorage.setItem("pathname", props.location.pathname);
    
    const [values, handlerInput] = useCustomForm();
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const login = async () => {
        try{
            setResult(await axios.post(`http://localhost:9000/auth/login`, values));
            console.log(result);
            console.log("Habilitado", result.data.info.habilitado);
            window.localStorage.setItem("Habilitado", result.data.info.habilitado);
    
        } catch (err) {
            setError(true);
        }
        console.log(error);
    }

    const alerta =  ()=>{
        const condicion= result.status;
        console.log ("El status HTTP es: ", condicion)
        if (condicion===200) {
        props.history.push('/login');
            Swal.fire({
                title: 'Solo un paso más!',
                text: 'Por favor, andá a tu correo y confirmá la registración',
                icon: 'info',
                confirmButtonText: 'Ok'
            });
        } else {
            Swal.fire({
                title: 'Ups! Algo Salio mal...',
                text: 'Por favor, indentá de nuevo',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        };  
    };

    return (
        <>
            <div className="row justify-content-center mt-4 registro">
                <div className="col-7">
                    <form onSubmit={handleSubmit(login)}>
                        {/* <div className="form-group mt-3">
                            <input {...register("username")} type="text" name="username" placeholder="Ingrese su nombre" className="form-control" onChange={handlerInput} />
                            {errors.username ? <p className="text-danger">{errors.username.message}</p> : null}
                        </div> */}
                        <div className="form-group mt-3">
                            <input {...register("mail")} type="email" name="mail" placeholder="Ingrese su mail" className="form-control" onChange={handlerInput} />
                            {errors.mail ? <p className="text-danger">{errors.mail.message}</p> : null}
                        </div>
                        <div className="form-group mt-3">
                            <input {...register("pass")} type="password" name="pass" placeholder="Ingrese su contraseña" className="form-control" onChange={handlerInput} />
                            {errors.pass ? <p className="text-danger">{errors.pass.message}</p> : null}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-info" onClick={alerta}   >Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;