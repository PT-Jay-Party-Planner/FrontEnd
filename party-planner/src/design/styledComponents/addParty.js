import React from "react";
import styled from 'styled-components';



export const Header = styled.div `

    width:100%;
    height:15%;
  display:flex;

    .background 
  {width: 100%;
     
         display:flex;
        position: relative;
      }
     .logo{
         position: absolute;
         margin:1px;
         width:100%;
         display:flex;
         height:150px;
         align-content:center;
         top:1px;
      }









`

 export  const StyledButton = styled.button `

 font: RalewayExtra bold;
 font-size: 18pt;
 background-color:#f58676;
 color:white
&:hover{
background-color:white;
color:#f58676;
margin:20px;
@media(max-width:500px){
 font-size: 12pt;

}


`


 export const Container = styled.div `
 display:flex;
 flex-direction:column;
 align-items:center;
 aligncontent: center;
 


 @media(max-width:800){
     width: 800px;
 }


 @media(max-width: 500px){
     width:500px;
 }
 `

 export const StyledLabel = styled.label `
 display:flex;
 color: blue;
 font-size:20pt;
 border-bottom: 2px solid grey;
 margin:10px;
 

 @media(max-width:800px){
    display:flex;
    color: blue;
    font-size:20pt;
    border-bottom: 2px solid grey;
    margin:10px;
    margin-bottom:10px;

 }
 
 @media(max-width:500px){

    color: blue;
    font-size:17pt;
    border-bottom: 2px solid grey;
    margin:auto;
    margin-bottom:7px;


 }
 
 
 
 
 `


 export const StyledForm = styled.form `
 display:flex;
 flex-direction:column;
 align-content:center;
 align-items:center;
 width:100%;
 
 
 `
export const FormDiv = styled.div `
 display:flex;
 align-content:center;
 align-items:center;
 width:100%;
 height:15%;
 padding:40px;
 
 
 `
 export const InputDiv = styled.div `
 display:inline-flex;
 flex-direction:column;
 align-content:center;
 align-items:center;
 width:50%;
 &:hover{
    background-color:#f58676;
}
padding:40px;


 `
 export const LastInput = styled.div`
 display:inline-flex;
 flex-direction:column;
 align-content:center;
 align-items:center;
 width:100%;
 &:hover{
    background-color:#f58676;
}
padding:40px;

button{
    margin:20px;
    @media(max-width:500px){
        font-size: 12pt;

       
       }
}
 
 `