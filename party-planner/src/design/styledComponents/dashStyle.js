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
&:hover{
background-color:white;
color::#f58676;



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
  export const Middle = styled.div `
  
  display: flex;
  align-items:center;
  align-content: center;
  width:100%;
  height:55%;
  padding:40px;
  
  `
  export const Centered = styled.div
   
    `display: flex;
    flex-direction:column;
    align-items:center;
    align-content: center;
    width:50%;
     padding:15px;


    link {
        margin: 20px;
     }


    button{
         font-size:12px;
          padding:10px;
    }
`
  

  export const ImgDiv = styled.div `
   width:50%;
    display:flex;
   align-items:center;
   
 
   img{

    border:2px solid grey;
    border-radius: 80px;
    margin:auto;
    width: 100;

   }
  
  `

  export const StyledH2 = styled.h2 `
  
  font-family:RalewayMedium;
  font-size: 24pt;
  margin:auto;

  
  `

  export const PartyDiv = styled.div `
  
  display:flex;
    background-color :#f3e8cb;
    flex-direction: column;
    align-items:center;
    align-content:center;

    margin-top: 30px;
    link: { color:red}  
   width:100%;
   height: 30%;
  
  
  
  `

  export const PlusButton = styled.button `
    


    color:white;
    background-color:#f58676;
    border-radius:40px;
    font-size:30pt;
    margin: 10px;
     
    &:hover{
        background-color:white;
        color:#f58676;
        font: RalewayExtra bold;
    }
     
 

    @media(max-width: 500) {

        color:white;
        background-color:#f58676;
        border-radius:40px;
        font-size:20pt;
        margin: 10px;
         
        &:hover{
            background-color:white;
            color:#f58676;
            font: RalewayExtra bold;
        }
    

    }
  
  `
  