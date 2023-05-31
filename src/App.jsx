// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import './styles/App.css'
// importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  //RUN Once
  useEffect(() => {
    getLocalTodos();
  }, [])
  //Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos);
        break;
      }
    }

  //Save to localStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null ){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal)
      setTodos(todoLocal)
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} setStatus={setStatus}/>
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  )
}

export default App
