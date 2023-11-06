import styled from "styled-components";
import Logo from "../Components/Logo";
import InputSearch from "../Components/InputSearch";
import Contact from "../Components/Contact";
import Panier from "../Components/Panier";
import Favo from "../Components/Favo";
import MyCompte from "../Components/MyCompte";
import MenuHamb from "../Components/MenuHamb";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98vw;
  height: 10vh;
  background-color: #7d9fffe3;
  padding: 0 20px;
  border-radius: 0 0 10px 10px;
  

  & > :nth-child(2) {
    display: none;
  }
  & > :nth-child(3) {
    width: 40%;
  }
  & > :nth-child(4) {
    height: 100%;
    width: 20%;
  }

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #7d9fffe3;
    & > :nth-child(2) {
      display: block;
      height: 100%;
      width: 10%;
      & {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
      }
    }
    & > :nth-child(3) {
      display: none;
    }
    & > :nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 300px) {
    & > :nth-child(1) {
      font-size: 10vw;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    &:hover {
      cursor: pointer;
      color: #fa5;
      font-size: 2rem;
      transition: 0.4s;
    }
  }
`;

function Headers() {
  return (
    <Container>
      <Logo />
      <MenuHamb />
      <InputSearch />
      <IconContainer>
        <Contact />
        <Panier />
        <Favo />
        <MyCompte />
      </IconContainer>
    </Container>
  );
}

export default Headers;
