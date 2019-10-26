import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import  * as Dash from  '../design/styledComponents/dashStyle';
import styled from 'styled-components';


const Dashboard = props => {
  const [partyList, setPartyList] = useState([]);


 

  useEffect(() => {
    axiosWithAuth()
      .get("/parties/")
      .then(res => setPartyList(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(partyList);

  const idList = partyList.map(id => id.id);

  return (
    <Dash.Container> 




<Dash.Header>
          
         
          <img  className = "background"src ="https://github.com/PT-Jay-Party-Planner/UXDesign/blob/master/Assets/Images/s-o-c-i-a-l-c-u-t-CZ8XutyXLr8-unsplash.jpg?raw=true"/>

          <img className = "logo" src ="https://github.com/PT-Jay-Party-Planner/UXDesign/blob/master/Style%20Guide/Web%20Style%20Guide/Logo-biggersize.jpg?raw=true"/>
        </Dash.Header>



      <Dash.Middle>
              

               <Dash.ImgDiv>
               <img src = "https://github.com/PT-Jay-Party-Planner/Marketing/blob/master/img/colby.jpeg?raw=true"  />    
 
               </Dash.ImgDiv>
               <Dash.Centered>
               <Dash.StyledH2>Name </Dash.StyledH2> 
               <Dash.StyledH2>Email </Dash.StyledH2> 

 

               </Dash.Centered>
 


      </Dash.Middle>

      <Dash.PartyDiv>
        <Dash.StyledH2>Parties</Dash.StyledH2>
      {partyList.map(id => (
              

              <Dash.Centered>

<Link  to={`/party/${id.id}`}>
         <Dash.StyledH2>{id.party_name}</Dash.StyledH2>  
         </Link>
              </Dash.Centered>
       
        

        
      ))}
 
      

 
      </Dash.PartyDiv>





 
      {/* <Link to="/add-party/1">
        <Dash.StyledButton>Party 1</Dash.StyledButton>
      </Link> */}




     <Dash.PartyDiv>
     <Dash.StyledH2>Add new List categories</Dash.StyledH2>
     <Dash.PlusButton>+</Dash.PlusButton>
                 

     </Dash.PartyDiv>
    </Dash.Container>
  );
};

export default Dashboard;
