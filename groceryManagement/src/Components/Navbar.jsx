import { Link } from 'react-router-dom'
import { FaHome,FaTruckMoving,FaProductHunt} from "react-icons/fa";


function Navbar() {
  return (
    <div className="navbar" >
      <div className="logo">
        { /* <img src="./images/mixture.jpg" alt="logo" /> */}
        <h1> GROCERY STORE </h1> 
        </div> 
        <div className="home">
        <ul>
          <li>
            <Link to="/home"><FaHome/>Home </Link> </li> 
            <li>
            <Link to="/Order"><FaTruckMoving/> Order</Link>
          </li>
          <li>
            <Link to="/Product" ><FaProductHunt/> Product </Link>
          </li>
        </ul>
      </div>
      <div className="login-1">
        <button>
          <Link to="/Login"> Login</Link>
        </button>
        <button >
          <Link to="/Signup"> Signup </Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;