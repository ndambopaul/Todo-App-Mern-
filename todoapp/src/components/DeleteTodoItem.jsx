import React from 'react'

const DeleteTodoItem = ({ id, title }) => {

    const handleDelete = async() => {
        const todos = JSON.parse(sessionStorage.getItem('todos') || '[]')
        const filteredTodos = todos.filter(todo => todo.id !== id)
        sessionStorage.setItem("todos", JSON.stringify(filteredTodos))
        window.location.reload()
    }

  return (
    <div className="modal fade" id="deleteItem" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Item</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <p>Delete todo item: <b>{title}</b></p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DeleteTodoItem