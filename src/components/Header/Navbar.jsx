import React from 'react'
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Pages/redux/store";
import logo from '../../api/Assets/img/stmconf..png';

const Navbar = () => {
 

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  // const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top bg-light shadow  bg-white ">
        <div className="container ">
          <NavLink className="navbar-brand"  to="/">
            <img src={logo} width={'150'} alt="logo" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-10 mb-2 mb-lg-0 m-2">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
              </li> <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/all-sponsers">Sponsers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/venue">Venue</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Who we are
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/blogs">Blogs</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/terms-and-conditions">Terms and Conditions</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/publication-management">Publication Management</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to="/faq">Faq</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
              </li>
              {!isLogin && (
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/login"><span className='btn btn-dark' style={{width:80}} >Login</span></NavLink>
              </li>
                 )}
                    {isLogin && (
                
                <li>
                 <NavLink className="nav-link active" aria-current="page" to="/dashboard/add-speaker"><span className='btn btn-dark' style={{width:100}}>Dashboard</span></NavLink>
                 </li>
               )}
              {isLogin && (
                
                <li>
                 <NavLink className="nav-link active" aria-current="page" to="/"><span className='btn btn-dark' style={{width:80}} onClick={handleLogout} >LogOut</span></NavLink>
                 </li>
               )}
              
         
             
            </ul>


          </div>

        </div>
      </nav>




    </>
  )
}

export default Navbar