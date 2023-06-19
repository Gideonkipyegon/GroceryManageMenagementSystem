import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <div className="login-item">
            <label htmlFor="">User Name:</label>
            <input type="text" placeholder="fullName" required />
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="Password" required />
            <button>forget</button> 
            <button ><Link path="./home" element="Home">Login</Link></button>
            </div>
        </div>
    )
}