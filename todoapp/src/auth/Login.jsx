import React, { useState, useContext } from 'react';
import { BACKEND_URL } from '../constants';
import { UserContext } from '../context/AuthContext';

const Login = ({ setShowLoginForm }) => {
    const { updateToken } = useContext(UserContext);
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }
        
        const loginUser = async() => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/v1/users/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                if(response.ok) {
                    const data = await response.json()
                    updateToken(data.token)
                    window.location.replace("/")
                } else {
                    window.alert("Login Failed!!!")
                }
            } catch (error) {
                console.log(error)
            }
        }
        loginUser()
    }

  return (
    <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4'></div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
        <h4 className='text-center'>Todo App: Login</h4>
        <hr/>
            <form onSubmit={handleSubmit}>
                
                <div className='mb-2'>
                    <label className='form-label'>Email</label>
                    <input type='email' name='email' id='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                </div>
        
                <div className='mb-2'>
                    <label className='form-label'>Password</label>
                    <input type='password' name='password' id='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='text-center mb-3'>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </div>
            </form>
            <p className='mt-2'>No have an account yet <a href='#' onClick={() => setShowLoginForm(false)}>Register Here</a></p>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'></div>
    </div>
  )
}

export default Login