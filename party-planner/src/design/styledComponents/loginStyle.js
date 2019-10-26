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

@media(max-width:500px){


    font-size:12pt;
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

  export const  StyledForm = styled.form `
  display: flex;
  flex-direction:column;
  align-items:center;
  padding:50px;
  height: 50%;

  input{
      margin: 20px;
      padding: 10px;

      &:hover{
          background-color:#f58676
      }
   }
 `