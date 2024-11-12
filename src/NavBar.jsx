import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../src/authContext';
import "./CSS/navbar.css"
function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/"> Home </Link>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> SignUp</Link>
         
        </> 
      )}
    </nav>
  );
}

export default Navbar;