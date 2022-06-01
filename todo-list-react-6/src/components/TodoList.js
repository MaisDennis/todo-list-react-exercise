import React, { useState } from 'react'

import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos])
    console.log(todos)
  }

  function completeTodo(todo) {
    todo.isComplete = !todo.isComplete
    console.log(todo.isComplete)
  }

  function removeTodo(todo) {
    const editedTodoList = todos.filter((t) => t !== todo)
    setTodos(editedTodoList)
  }

  function editTodo(id, todo) {
    const editedTodoList = todos.map((t) => {
      if(t.id === id) { 
        t.text = todo.text
      }
      return t;
    })
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TodoForm addTodoProp={addTodo} />
      <Todo
        todosProp={todos}
        completeTodoProp={completeTodo}
        removeTodoProp={removeTodo}
        editTodoProp={editTodo}

      />
    </div>
  )
}

export default TodoList