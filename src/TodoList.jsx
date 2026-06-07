import {TodoItem} from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No tasks yet. Add your first task!"}
      {todos.map(todo => { 
        return (
        <TodoItem
        {...todo}
          key={todo.id}
          completed={todo.completed}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )})}
    </ul>
  )
}