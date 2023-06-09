export default function Login() {
    return (
        <div className="login">
            <label htmlFor="">User Name:</label>
            <input type="text" placeholder="fullName" required />
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="Password" required/>
            <button>forgot</button> 
            <button>Login</button>
        </div>
    )
}