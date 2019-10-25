import styled from "styled-components";

export const TodoContainer = styled.section`
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
}`;

export const TodoHeader = styled.div`
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
`;

export const PartyH1 = styled.h1`
  padding: 10%;
  color: #f58676;
  text-align: center;
  font-family: Raleway;
  font-size: 2.5rem;
`;

export const PartyDownImage = styled.img`
  height: 185px;
  width: 80%;
  padding-top: 4%;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const TodoBodyContainer = styled.div`
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
  }
`;

export const Savebtn = styled.button`
  width: 20%;
  height: 45px;
  background-color: #f58676;
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
`;

export const Button = styled.div`
  padding-top: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const PartyH2 = styled.div`
  font-family: Raleway;
  font-size: 2rem;
  text-align: center;
  padding-top: 4%;
  padding-bottom: 8%;
`;
