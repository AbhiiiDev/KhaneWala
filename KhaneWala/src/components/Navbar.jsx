import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import Modal from "../modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

const Navbar = () => {
const navigate=useNavigate();
const [cartView, setcartView] = useState(false);
let data=useCart();
const handleClick=()=>{
localStorage.removeItem("authToken");
navigate("/login")
}

  return (
    <div> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            KhaneWala
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>



              {
                (localStorage.getItem("authToken"))?
<li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  My Orders
                </Link>
              </li>
                : ""
              }
             
            </ul>

<div className="">

  {
    (!localStorage.getItem("authToken"))?
<div className="d-flex">

    <Link className="btn bg-white text-dark" to="/login">
    Login
  </Link>

  <Link className="btn bg-white text-dark mx-1" to="/signup" > 
    SignUp
  </Link>
</div>
: 
<div >
<Link className="btn bg-white text-dark mx-1  position-relative" onClick={()=>setcartView(true)} to="/cart">
My Cart
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{data.length}
  </span>
</Link>
{cartView? <Modal onClose={()=>setcartView(false)}  > <Cart/></Modal>:""}

{/* <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button> */}

<div className="btn bg-white text-dark mx-1 " onClick={handleClick}>
Logout
</div>
</div>
  }


</div>

          </div>
        </div>
      </nav>
    
    </div>
  );
};

export default Navbar;
