import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as Party from '../design/styledComponents/addParty';

const AddParty = props => {
  const [partyInfo, setPartyInfo] = useState([]);

  const handleChange = e => {
    setPartyInfo({
      ...partyInfo,
      [e.target.name]: e.target.value,
      user_id: 1
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/parties", partyInfo)
      .then(res => props.setEditItem(!props.editItem))
      .catch(err => console.log(err));
  };

  console.log(partyInfo);
  return (
    <Party.Container>


<Party.Header>
          
         
          <img  className = "background"src ="https://github.com/PT-Jay-Party-Planner/UXDesign/blob/master/Assets/Images/s-o-c-i-a-l-c-u-t-CZ8XutyXLr8-unsplash.jpg?raw=true"/>

          <img className = "logo" src ="https://github.com/PT-Jay-Party-Planner/UXDesign/blob/master/Style%20Guide/Web%20Style%20Guide/Logo-biggersize.jpg?raw=true"/>
        </Party.Header>

      <Party.StyledForm onSubmit={handleSubmit} className="add-party-form">

          <Party.FormDiv> 
         

         <Party.InputDiv> 
        <Party.StyledLabel>
          Party Name
          
          </Party.StyledLabel>



          <input
            type="text"
            placeholder="Party Name"
            name="party_name"
            onChange={handleChange}
          />

          
 
        </Party.InputDiv>


        <Party.InputDiv> 
       <Party.StyledLabel>
       Number Of Guests

       </Party.StyledLabel>
           <input
            type="number"
            placeholder="Number Of Guests"
            name="n_of_guests"
            onChange={handleChange}
          />
         </Party.InputDiv>
    

        </Party.FormDiv>


        <Party.FormDiv> 




          <Party.InputDiv> 
       <Party.StyledLabel>
       Party Budget $

       </Party.StyledLabel>
          
           <input
            type="number"
            placeholder="10"
            name="budget"
            onChange={handleChange}
          />

</Party.InputDiv>

      <Party.InputDiv> 
        <Party.StyledLabel>
        Party Date

        </Party.StyledLabel>
           <input
            type="date"
            placeholder={Date()}
            name="date"
            onChange={handleChange}
          />
       
        </Party.InputDiv>
        </Party.FormDiv>


     <Party.LastInput> 
       <Party.StyledLabel>
       Party Theme
       </Party.StyledLabel>
           <input
            type="text"
            placeholder="Party Theme"
            name="theme"
            onChange={handleChange}
          />
         <Party.StyledButton>Add Party!</Party.StyledButton> 
        </Party.LastInput>
      </Party.StyledForm>


      
      <div className= "footer">

<img src= "https://cdn.zeplin.io/5da64e5e2e044a2ffcc440f3/assets/4dff3f94-f351-442d-9f98-9d5f7c3e4ef7.png" className="cupcake"/>





</div>
    </Party.Container>
  );
};

export default AddParty;
