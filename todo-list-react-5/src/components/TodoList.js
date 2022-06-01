import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('react_list_todos5')) || []
  );

  useEffect(() => {
    saveToLocalStorage()
  }, [todos])


  async function addTodo(todoValue) {
    setTodos([todoValue, ...todos])
    console.log(todos)
    // saveToLocalStorage()
  }

  function completeTodo(id) {
    const editedTodosList = todos.map((t) => {
      if (t.id === id) {
        t.isComplete = !t.isComplete;
        console.log(t.isComplete)
      }
      return t
    })
    setTodos(editedTodosList)
    // saveToLocalStorage()
  }

  function removeTodo(id) {
    const editedTodosList = todos.filter((t) => t.id !== id)
    setTodos(editedTodosList);
    // saveToLocalStorage()
  }

  function editTodo(id, todoData) {
    const editedTodosList = todos.map((t) => {
      if(t.id === id) {
        t = todoData
      }
      return t
    })
    setTodos(editedTodosList);
    // saveToLocalStorage()
  }

  function saveToLocalStorage() {
    localStorage.setItem('react_list_todos5', JSON.stringify(todos));
  }

  return (
    <div>
      <TodoForm addTodoData={addTodo} />
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
