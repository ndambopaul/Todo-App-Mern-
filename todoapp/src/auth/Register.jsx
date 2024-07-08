import React, { useState } from 'react';
import { BACKEND_URL } from '../constants';

const Register = ({ setShowLoginForm }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password,
            username: username,
            role: "customer"
        }
        console.log(userData)

        const registerUser = async() => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/v1/users/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });
                if(response.ok) {
                    window.location.reload()
                } else {
                    window.alert("Something went wrong")
                }
            } catch (error) {
                console.log(error)
            }
        }
        registerUser()
    }

  return (
    <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4'></div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
            <form onSubmit={handleSubmit}>
                <h4 className='text-center'>Todo App: Register</h4>
                <hr/>
                <div className='mb-2'>
                    <label className='form-label'>Name</label>
                    <input type='text' name='name' id='name' className='form-control'  onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Email</label>
                    <input type='email' name='email' id='email' className='form-control'  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Username</label>
                    <input type='text' name='username' id='username'  className='form-control' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Password</label>
                    <input type='password' name='password' id='password'  className='form-control' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='text-center mb-3'>
                    <button type='submit' className='btn btn-primary'>Submit Data</button>
                </div>
            </form>
            <p className='mt-2'>Already have an account <a href='#' onClick={() => setShowLoginForm(true)}>Login Here</a></p>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'></div>
    </div>
  )
}

export default Register