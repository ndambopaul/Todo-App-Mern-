import React, { useState } from 'react'

const NewTodoItem = () => {
    const [title, setTitle] = useState(null)
    const [status, setStatus] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const existingTodos = JSON.parse(sessionStorage.getItem('todos') || '[]')
        const newTodoId = existingTodos.length + 1

        const todo = {
            id: newTodoId,
            title: title,
            status: status,
            created_at: new Date().toLocaleString()
        }
       
        const newTodos = [...existingTodos, todo]

        sessionStorage.setItem("todos", JSON.stringify(newTodos))
        window.location.reload()
    }

  return (
    <div className="modal fade" id="addItem" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">New Item</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label className='form-label'>Title</label>
                    <input type='text' id='title' name='title' className='form-control' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Status</label>
                    <select className='form-select' id='status' name='status' onChange={(e) => setStatus(e.target.value)}>
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

export default NewTodoItem