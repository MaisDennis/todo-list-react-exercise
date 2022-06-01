import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) return
    setTodos([todo, ...todos])
    // console.log(todos)
  }

  const updateTodo = (id, newData) => {
    if(!newData) return
    let editedTodoList = todos.map(t => {
      if (t.id === id)
        t = newData
      return t
    });
    setTodos(editedTodoList);
    console.log(todos)
  }

  const completeTodo = (id) => {
    const updatedTodoList = todos.map((t) => {
      if (t.id === id)
        t.isComplete = !t.isComplete
      // console.log(t.isComplete)
      return t
    })
    setTodos(updatedTodoList)
  }

  const removeTodo = (id) => {
    const updatedTodoList = todos.filter((t) => t.id !== id)
    // console.log(updatedTodoList)
    setTodos(updatedTodoList)
  }

  return (
    <div>
      <h1>Todo List 3</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></Todo>
    </div>
  )
}

export default TodoList