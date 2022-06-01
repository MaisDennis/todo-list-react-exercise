import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([value, ...todos]);
  }

  const completeTodo = (completeTodoId) => {
    let newTodoList = todos.map((t) => {
      if (t.id === completeTodoId) {
        t.isComplete = !t.isComplete
      } return t
    })
    setTodos(newTodoList);
  
  
  
  
  } 

  const editTodo = (editTodoId, newTodoData) => {
    if(!newTodoData) return;
    let editedTodoList = todos.map((t) => {
      if (t.id === editTodoId) {
        t = newTodoData;
      }
      return t;
    })
    setTodos(editedTodoList);
  }

  const deleteTodo = (deleteTodoId) => {
    const updatedTodoList = todos.filter((t) => {
      if (t.id !== deleteTodoId) return t
      return
    })
    setTodos(updatedTodoList);
  }

  return (
   <div>
      <TodoForm addTodoData={addTodo} />
      <Todo
        todosProp={todos}
        completeTodoProp={completeTodo}
        editTodoProp={editTodo}
        deleteTodoProp={deleteTodo}
      />
    </div>
  )
}

export default TodoList
