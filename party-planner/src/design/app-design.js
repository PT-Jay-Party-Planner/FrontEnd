import styled from "styled-components";
import headerimg from "../img/header.jpg";

export const AppContainer = styled.div`
  margin: auto;
  max-width: 90%;
`;

export const Header = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${headerimg});
  display: block;
`;

export const TitleText = styled.a`
  font-size: 3rem;
  color: rgb(245, 134, 118);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;
