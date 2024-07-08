import React, { useContext } from 'react'
import TodosTable from './TodosTable'
import { StudentsContext } from "../context/StudentsContext";


const Todos = () => {
  const { students } = useContext(StudentsContext);
  console.log(students)
  const todos = JSON.parse(sessionStorage.getItem('todos') || '[]')
  return (
    <div className='row'>
      <TodosTable todos={todos} />
       
    </div>
  )
}

export default Todos