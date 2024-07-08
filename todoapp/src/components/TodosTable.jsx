import React, { useState } from "react";
import DeleteTodoItem from "./DeleteTodoItem";
import NewTodoItem from "./NewTodoItem";
import EditTodItem from "./EditTodItem";

const TodosTable = ({ todos }) => {
  const [todoId, setTodoId] = useState(null);
  const [title, setTitle] = useState(null);
  
  const selectItemToDelete = (id, title) => {
    setTodoId(id)
    setTitle(title)
  }

  const selectItemToEdit = (id) => {
    setTodoId(id)
  }

  return (
    <>
    <NewTodoItem />
    <EditTodItem id={todoId} />
    <DeleteTodoItem id={todoId} title={title} />
    <div className="col-sm-12 col-md-12 col-12">
      <div className="row">
        <div className="col">
          <h3>Todo Items</h3>
        </div>
        <div className="col">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addItem">Add Item</button>
        </div>
      </div>
      <table className="table table-small">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Date Created</th>
            <th scope="col">Status</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return <tr key={todo.id}>
            <th scope="row">{todo.id}</th>
            <td>{todo.title}</td>
            <td>{todo.created_at}</td>
            <td>{todo.status}</td>
            <td>
              <button className="btn btn-primary btn-sm" onClick={() => selectItemToEdit(todo.id)} data-bs-toggle="modal" data-bs-target="#editItem">
                <i className="bi bi-pencil-square"></i></button>
            </td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => selectItemToDelete(todo.id, todo.title)} data-bs-toggle="modal" data-bs-target="#deleteItem">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          })}
          
          
        </tbody>
      </table>
    </div>
    </>
  );
};

export default TodosTable;
