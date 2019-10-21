import React, {useState} from 'react';

function Todo({todo, index, finishTodo, removeTodo}){
    return(
        <div style={{textDecoration: todo.isComplete ? 'line-through' : ''}}className="todo">{todo.text}
        <div>
            <button onClick={()=> finishTodo (index)} >Done</button>
            <button onClick={()=> removeTodo (index)} >X</button>
        </div>
        </div>
    )
}

function TodoForm({addTodo}){
    const [value, setValue]=useState("");
    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
        placeholder="Add new task";
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={e=> setValue(e.target.value)}/>
        </form>
    )
}

function TodoList () {
    //list of todos - looking for api?
    const [todos, setTodos]=useState([
        {
            text: "Set a date for the event",
            isComplete: false
        },
        {
            text: "Scout out locations",
            isComplete: false
        },
        {
            text: "Create your invite list",
            isComplete: false
        },
        {
            text: "Send Save-The-Date messages to guests",
            isComplete: false
        },
        {
            text: "Set a budget",
            isComplete: false
        },
        {
            text: "Choose a theme for your event",
            isComplete: false
        },
        {
            text: "Plan a menu",
            isComplete: false
        },
        {
            text: "Set a date for the event",
            isComplete: false
        },
        {
            text: "Send formal invites and request RSVP",
            isComplete: false
        },
        {
            text: "Plan entertainment",
            isComplete: false
        },
        {
            text: "Hire help such as servers, clean-up, DJ...",
            isComplete: false
        },
        {
            text: "Follow up on RSVPs",
            isComplete: false
        },
        {
            text: "Buy decorations and food",
            isComplete: false
        },
        {
            text: "Confirm venue and help",
            isComplete: false
        },
        {
            text: "Prep menu items",
            isComplete: false
        },
        {
            text: "Decorate venue",
            isComplete: false
        },
        {
            text: "Have fun!",
            isComplete: false
        }


    ]);

    //add new custom task
    const addTodo=text=>{
        const newTodos=[...todos,{text}];
        setTodos(newTodos);
    }

    //mark as finished
    const finishTodo = index =>{
        const newTodos = [...todos];
        newTodos[index].isComplete = true;
        setTodos(newTodos);
    }

    //remove tasks you don't need
    const removeTodo = index =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);   
    }

    return(
        <div>
            <div className="todo-list">
                {todos.map((todo,index)=>(
                    <Todo key={index} index={index} todo={todo} finishTodo={finishTodo} removeTodo={removeTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>

    )
}

export default TodoList;