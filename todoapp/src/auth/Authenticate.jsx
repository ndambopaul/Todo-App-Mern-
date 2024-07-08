import React, { useState } from 'react';
import Login from "./Login";
import Register from "./Register";

const Authenticate = () => {
  const [showLoginForm, setShowLoginForm] = useState(true)
  return (
    <div className='container mt-4'>
      {showLoginForm ? <Login setShowLoginForm={setShowLoginForm} /> : <Register setShowLoginForm={setShowLoginForm} />}
    </div>
  )
}

export default Authenticate