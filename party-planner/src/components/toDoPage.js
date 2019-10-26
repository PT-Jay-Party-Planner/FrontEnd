import React from 'react';
import TodoList from './toDoList';
import styled from 'styled-components';
import Footer from './footer';


const TodoContainer=styled.section`
width: 95%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width: 800px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center
    width: 100%;
}
@media (max-width: 500px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center,
    width: 100%;
}`

const TodoHeader=styled.div`
background-image: url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
width: 80%;
height: 300px;
background-size: cover;
background-position: center;
@media (max-width: 800px) {
   
    width: 100%;
}
@media (max-width: 500px) {
    
    width: 100%;
}

`

const PartyH1=styled.h1`
padding: 10%;
color: #F58676;
text-align: center;
font-family: Raleway;
font-size: 2.5rem;`



const TodoBodyContainer=styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 800px) {
   
    width: 100%;
}
@media (max-width: 500px) {
    
    width: 100%;
}`

const Savebtn=styled.button`
width: 20%;
height: 45px;
background-color: #F58676;
border-radius: 15px;
text-align: center;
font-family: Raleway;
font-weight: bold;
font-size: 1rem;
@media (max-width: 800px) {
   
    width: 20%;
}
@media (max-width: 500px) {
    
    width: 30%;
}
`

const Button=styled.div`
padding-top: 14%;
display: flex;
align-items: center;
justify-content: center;
width: 75%;`

const PartyH2=styled.div`
font-family: Raleway;
font-size: 2rem;
text-align: center;
padding-top: 4%;
padding-bottom: 8%;`


function ToDoPage(){
    return (
        <TodoContainer>
            <TodoHeader>
                {/* <PartyUpImage src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="party banner"/> */}
                <PartyH1>Party Planner</PartyH1>
            </TodoHeader>
            <TodoBodyContainer>
                <PartyH2>Ready to create your To Do list?</PartyH2>
                <h4 className="list-name">To Do List Name</h4>
                <TodoList/><br></br>
                <Button>
                    <Savebtn type="submit">Save List</Savebtn><br></br>
                </Button>
            </TodoBodyContainer>
            <Footer/>
        </TodoContainer>
    )
}

export default ToDoPage