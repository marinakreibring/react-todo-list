import {useEffect, useState} from "react"
import {NewTodoForm} from "./NewTodoForm"
import {TodoList} from "./TodoList"
import {TodoFilter} from "./TodoFilter"
import "./styles.css"

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
        return JSON.parse(localValue)
      })  
      const [filter, setFilter] = useState("all")

      const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed
        if (filter === "completed") return todo.completed
        return true
    })

      useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
      }, [todos])
      
      function addTodo(title) {
        setTodos(currentTodos => {
          return [
            ...currentTodos,
            {id: crypto.randomUUID(), title, completed: false}
          ]
        })  
    }
  
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  } 
  function clearCompleted() {
  setTodos(currentTodos =>
    currentTodos.filter(todo => !todo.completed)
  )
}

  return (
  <>  
   
    <h1 className="header">To-do List</h1>
    <p>Organize your daily tasks</p>
    <TodoFilter filter={filter} setFilter={setFilter} />

    <NewTodoForm onSubmit={addTodo} />

    <TodoList
      todos={filteredTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
    <p>
        {todos.filter(todo => todo.completed).length} of {todos.length} completed
      </p>
      <button className="completed" onClick={clearCompleted}>
        Clear Completed
      </button>
  </>
  )
}
