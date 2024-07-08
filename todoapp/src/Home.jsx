import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/AuthContext'

const Home = () => {
    const {token } = useContext(UserContext)
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <h3>Welcome to our Todo App</h3>
                <p>This is the best todo app you can find.</p>
                {token ? (
                    <Link to={`/todos`} className='btn btn-secondary'>See Todos</Link>
                    
                ) : (
                    <Link to={`/authenticate`} className='btn btn-primary'>Access Account</Link>
                )}
                
            </div>
            <div className="col"></div>
        </div>
    </div>
  )
}

export default Home