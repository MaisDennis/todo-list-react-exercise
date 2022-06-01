import React, { useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {
  const [ todos, setTodos ] = useState([]);
  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  function removeTodo(id) {
    const editedTodos = todos.filter((t) => t.id !== id)
    setTodos(editedTodos)
  }

  function completeTodo(todo) {
    todo.isComplete = !todo.isComplete;
    console.log(todo);
  }

  function editTodo(id, todo) {
    const editedTodoList = todos.map(t => {
      if (t.id === id) {
        t.text = todo.text
      }
      return t;
    })
  }

  return (
    <div>
      <TodoForm
        addTodoProp={addTodo}
      />
      <Todo 
        todosProp={todos}
        removeTodoProp={removeTodo}
        completeTodoProp={completeTodo}
        editTodoProp={editTodo}
      />
    </div>
  )
}

export default TodoList