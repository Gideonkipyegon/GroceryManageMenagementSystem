import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
      <img src="./images/mixture.jpg" alt="logo" />
      </div>
      <div className="home">
        <ul>
          <li>
           <Link to="/home"> Home</Link>
            </li>
          <li>
            <Link to="/Order">Order</Link>
            </li>
          <li>
            <Link to="/OrdersReceived">OrdersReceived</Link>
            </li>
          <li>
          <Link to="/Products"> Product</Link> 
          </li>
          <li>
           <Link to="/Employees"> Employees</Link>
          </li>
          <li>
            <Link to="/Stock">Stock</Link>
          </li>
        </ul>
      </div>
      <div className="login-1">
        <button>
          <Link to="/Login">Login</Link>
          </button>
        <button>
          <Link to="/Signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;