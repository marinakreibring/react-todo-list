import {TodoItem} from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => { 
        return (
        <TodoItem
        {...todo}
          key={todo.id}
          //id={todo.id}
          //title={todo.title}
          completed={todo.completed}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )})}
    </ul>
  )
}