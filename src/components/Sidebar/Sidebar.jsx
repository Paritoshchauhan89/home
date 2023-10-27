import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {  useDispatch } from "react-redux";
import { authActions } from "../../Pages/redux/store";

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
     <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sticky" style={{width: 280, height:'auto'}}>
  <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg className="bi pe-none me-2" width={40} height={32}><use xlinkto="#bootstrap" /></svg>
    <span className="fs-4">Welcome</span>
  </Link>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto ">
  <li className="nav-item mt-2">
      <Link to="/register" className="nav-link active" aria-current="page">
        Add User
      </Link>
    </li>
    <li className="nav-item mt-2">
      <Link to="/dashboard/all-users" className="nav-link active" aria-current="page">
        All Users
      </Link>
    </li>
    <li className="nav-item mt-2">
      <Link to="/" className="nav-link active" aria-current="page">
        Home
      </Link>
    </li>
    <li className="nav-item mt-2">
      <Link to="/dashboard/all-enrollments" className="nav-link active" aria-current="page">
        Enrollment
      </Link>
    </li>
    <li className="nav-item mt-2">
      <Link to="/dashboard/upload" className="nav-link active" aria-current="page">
          Media
      </Link>
    </li>
    <li className="nav-item mt-2">
      <Link to="/dashboard/add-speaker" className="nav-link active" aria-current="page">
        ADD speaker
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/add-sponser" className="nav-link active" aria-current="page">
        Add sponser
      </Link>
    </li>
    
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/add-organizer" className="nav-link active" aria-current="page">
        Add Organizer
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/view-testnomial" className="nav-link active" aria-current="page">
        Testnomial data
      </Link>
      
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/all-subscribers" className="nav-link active" aria-current="page">
        All Subscribers
      </Link></li>
    <li className="nav-item mt-2 mb-2">

      <Link to="/dashboard/add-gallery" className="nav-link active" aria-current="page">
        Add Gallery
      </Link>
      
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/add-news" className="nav-link active" aria-current="page">
        Add News
      </Link>
      
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/add-venue" className="nav-link active" aria-current="page">
        Add Venue
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/add-conference" className="nav-link active" aria-current="page">
        Add Conference
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/all-contacts" className="nav-link active" aria-current="page">
        All Contact Us
      </Link>
    </li>
    <li className="nav-item mt-2 mb-2">
      <Link to="/dashboard/add-faq" className="nav-link active" aria-current="page">
        Add Faq
      </Link>
    </li>
  

  
  </ul>
  <hr />
  <div className="dropdown">
    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      {/* <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" /> */}
      <strong>User</strong>
    </Link>
    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
      <li><Link className="dropdown-item" to="#">Settings</Link></li>
      <li><Link className="dropdown-item" to="#">Profile</Link></li>
      <li><hr className="dropdown-divider" /></li>
      <li><Link className="dropdown-item" to="/login" onClick={handleLogout}>Sign out</Link></li>
    </ul>
  </div>
</div>
    
    
    
    </>
  )
}

export default Sidebar
