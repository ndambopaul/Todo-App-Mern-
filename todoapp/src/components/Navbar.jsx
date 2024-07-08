import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/AuthContext"
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const { token, logoutUser } = useContext(UserContext);
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const { user } = jwtDecode(token)
    setUserData(user);
  }, [token])

  console.log(userData)


  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid text-white">
    <a className="navbar-brand text-white" href="#">Todos App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <form className="d-flex" role="search">
        <label className='form-label'>Hello: {userData.name}</label>
        <button className='btn btn-warning' onClick={logoutUser}>Logout</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar