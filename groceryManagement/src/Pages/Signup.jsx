import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import *as yup from 'yup'; import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios'

function Signup() {
    const navigate= useNavigate();
    const schema = yup.object().shape({
        fullName: yup.string().required("fullname is required"),
        email: yup.string().required("email is required"),
        address: yup.string().required("address is required"),
        phoneNumber: yup.string().required("phonenumber is required"),
        password: yup.string().required("password is required").min(8, "password is too short"),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
    const onSubmit = (data) => {
        Axios.post("http://localhost:8081/auth/register", data)
            .then((response) => {
                response.data.message && alert (response.data.message);
                navigate("/");
            })
            .catch((response) => {
                alert(response.data.error)
                
            });
    }
    return (
        <div>
            <form action="" className="form" onSubmit = { handleSubmit(onSubmit) }>
                <fieldset >
                    <legend > Sign - Up </legend>
                    <label > Full Name:</label>
                    <input type="text"{...register("fullname")} placeholder="fullName" required />
                    <p>{errors.username?.message}</p> 
                    <label  > Email: </label>
                    <input type="text" {...register("email")} placeholder="email" />
                    <p>{errors.email?.message}</p> 
                    <label > Address:</label>
                    <input type="text" {...register("address")} placeholder="address" />
                    <p>{errors.address?.message}</p> 
                    <label > Phone Number: </label>
                    <input type="text" {...register("phonenumber")} placeholder="phonenumber" required />
                    <p>{errors.phoneNumber?.message}</p> 
                    <label > Password: </label>
                    <input type="password" {...register("password")} placeholder="Password" required />
                     <p>{errors.password?.message}</p> 
                    <label > ConfirmPassword:</label>
                    <input type="password" {...register("confirmPassword")} placeholder="ConfirmPassword" required />
                     <p>{errors.confirmpassword?.message}</p> 
                       <button>Register</button>
                </fieldset >
            </form>
        </div>
    )
}


export default Signup;