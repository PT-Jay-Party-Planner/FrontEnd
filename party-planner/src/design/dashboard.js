import Styled from "styled-components";
import { Link } from "react-router-dom";

export const PartyButton = Styled.div`
  width: 250px;
  background: #f3e8cb;
  border-radius: 5px;
  height: 100px;
  font-size: 1.5rem;
  font-family: 'Roboto Slab', serif;
  display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const ImportImage = Styled.div`
    display: flex;
    justify-content: center;
`;

export const DashContainers = Styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`;

export const LinkContainer = Styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 10px;
`;

export const AddParty = Styled.div`
    width: 100%;
    background: #f3e8cb;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-flow: row;
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    height: 125px;
    align-items: center;
`;

export const PartyButtonSection = Styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
`;

export const RouterLink = Styled.a`
    display: flex;
    flex-flow: column;
    align-items: center;
`;
