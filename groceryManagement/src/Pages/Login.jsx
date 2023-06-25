import { Link } from "react-router-dom";
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate= useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required("username is required"),
        password: yup.string().required("password is required").min(8, "password is too short"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
    const onSubmit = (data) => { 
        Axios.post("http://localhost:8081/auth/register", data)
       .then((data) => {
        if(data.token){
            navigate("/home");
        }
       
    })
    .catch((response) => {
        alert(response.data.error)
        
    });}
    return (

        <div className = "login">

        <form action = "" onSubmit = { handleSubmit(onSubmit) } >
        <div className = "login-item">
        <h1 style = {{ textDecoration: "underline" } } > Login </h1> 
        <label  > UserName: </label> 
        <input type = "text" {...register("username") } placeholder = "fullName" required /> 
          <p>{errors.username?.message}</p>  
        <label > Password: </label>
        <input type = "password" {...register("password") } placeholder = "Password" required /> 
         <p>{errors.password?.message}</p>   
        <input type = "submit" value = "submit"/>
        </div> 
        </form>
</div>

    )
}