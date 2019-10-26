import React, { useState } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import plusSign from "@iconify/icons-el/plus-sign";

function Todo({ todo, index, finishTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => finishTodo(index)}>Done</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form
      style={{
        marginTop: "45%",
        backgroundColor: "#F3E8CB",
        width: "300px",
        height: "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={{
          borderStyle: "none",
          backgroundColor: "#F3E8CB",
          textAlign: "center",
          fontFamily: "Raleway",
          fontSize: "1rem",
          fontWeight: "bold",
          textDecoration: "blue underline 2px"
        }}
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add To Do Items"
      />
      <button
        type="submit"
        style={{ backgroundColor: "#F3E8CB", borderStyle: "none" }}
      >
        <Icon
          style={{ fontSize: "1.5rem", color: "#F58676" }}
          icon={plusSign}
        />
      </button>
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([]);

  //add new custom task
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  //mark as finished
  const finishTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  //remove tasks you don't need
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            finishTodo={finishTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default TodoList;
