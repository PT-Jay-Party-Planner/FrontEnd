import React from "react";
import * as All from "../design/toDoPage";
import TodoList from "./toDoList";

const ToDoPage = () => {
  return (
    <div>
      <All.TodoContainer>
        <All.TodoBodyContainer>
          <All.PartyH2>Ready to create your To Do list?</All.PartyH2>
          <h4 className="list-name">To Do List Name</h4>
          <TodoList />
        </All.TodoBodyContainer>
      </All.TodoContainer>
    </div>
  );
};

export default ToDoPage;
