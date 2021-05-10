import React, { useState } from "react";
import TodoItems from "./TodoItem";

const TodoList = () => {
  /*
   *  Value initalization
   */
  let todoInput = React.createRef();

  let initTodoList = [];

  if (localStorage.getItem("todoList")) {
    initTodoList = JSON.parse(localStorage.getItem("todoList"));
  } else {
    localStorage.setItem("todoList", JSON.stringify([]));
  }

  const [todoItems, setTodoItems] = useState(initTodoList);

  /*
   * Add new Item
   */
  const addListItem = () => {
    setTodoItems([...todoItems, todoInput.current.value]);

    localStorage.setItem(
      "todoList",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("todoList")),
        todoInput.current.value,
      ])
    );

    todoInput.current.value = "";
  };

  /*
    Remove Item
   */
  const removeListItem = (item) => {
    let filteredList = JSON.parse(localStorage.getItem("todoList")).filter(
      function (value, index, arr) {
        return value !== item;
      }
    );

    setTodoItems([...filteredList]);

    localStorage.setItem("todoList", JSON.stringify(filteredList));
  };

  return (
    <div className='container'>
      <form className='input-form'>
        <input
          type='text'
          name='name'
          placeholder='Enter task'
          ref={todoInput}
        />
        <button type='button' onClick={addListItem}>
          Add
        </button>
      </form>
      <TodoItems todoItems={todoItems} removeListItem={removeListItem} />
    </div>
  );
};

export default TodoList;
