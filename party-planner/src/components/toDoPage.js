import React from "react";
import * as All from "../design/toDoPage";

const ToDoPage = () => {
  return (
    <div>
      <All.TodoContainer>
        <All.TodoHeader>
          <img
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="party banner"
          />
          <All.PartyH1>Party Planner</All.PartyH1>
        </All.TodoHeader>
        <All.TodoBodyContainer>
          <All.PartyH2>Ready to create your To Do list?</All.PartyH2>
          <h4 className="list-name">To Do List Name</h4>
          {/* <TodoList /> */}
        </All.TodoBodyContainer>
        <All.PartyDownImage
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="cupcakes"
        />
      </All.TodoContainer>
    </div>
  );
};

export default ToDoPage;
