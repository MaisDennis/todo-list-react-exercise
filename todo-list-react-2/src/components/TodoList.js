import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text) return
    setTodos([todo, ...todos]);
  }

  const updateTodo = (id, newData) => {
    if (!newData) return
    let updatedTodoList = todos.map(todo => {
      if (todo.id === id)
        todo = newData
      return todo
    });
    setTodos(updatedTodoList);
    console.log(todos)
  }

  const completeTodo = id => {
    let UpdatedTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(UpdatedTodoList);
  }

  const removeTodo = (id) => {
    const updatedTodoList = [...todos].filter((todo => todo.id !== id))
    setTodos(updatedTodoList);
  }

  return (
    <div>
      <h1>What's the Plan?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></Todo>
    </div>
  )
}