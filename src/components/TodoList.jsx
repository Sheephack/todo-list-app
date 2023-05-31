// eslint-disable-next-line no-unused-vars
import React from 'react'
//Import components
import Todo from './Todo'

// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, filteredTodos, setTodos }) {
  return (
    <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo 
              text={todo.text} 
              key={todo.id} 
              setTodos={setTodos} 
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
    </div>
  )
}
