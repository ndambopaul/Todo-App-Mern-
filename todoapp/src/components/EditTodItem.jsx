import React, { useState, useEffect } from 'react'

const EditTodItem = ({ id }) => {
    const [title, setTitle] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const getTodos = () => { 
            const todos = JSON.parse(sessionStorage.getItem("todos"))
            const todoItem = todos.find(todo => todo.id === id)
            setTitle(todoItem.title)
            setStatus(todoItem.status)
        }
        if(id) {
            getTodos()
        }
        
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const todos = JSON.parse(sessionStorage.getItem("todos"))
        const updatedItems = todos.map((todo) => {
            if(todo.id === id) {
                todo.title = title,
                todo.status = status,
                todo.created_at = new Date().toLocaleString()
            }
            return todo
        })
        sessionStorage.setItem("todos", JSON.stringify(updatedItems))
        window.location.reload()
    }

  return (
    <div className="modal fade" id="editItem" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Item</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label className='form-label'>Title</label>
                    <input type='text' value={title} id='title' name='title' className='form-control' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Status</label>
                    <select className='form-select' value={status} id='status' name='status' onChange={(e) => setStatus(e.target.value)}>
                        <option value=""></option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>
            </div>
    </div>
  </div>
</div>
  )
}

export default EditTodItem