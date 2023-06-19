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
          <Link to="/Product">Product</Link> 
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