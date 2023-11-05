import styled from "styled-components";
import Logo from "../Components/Logo";
import InputSearch from "../Components/InputSearch";
import Contact from "../Components/Contact";
import Panier from "../Components/Panier";
import Favo from "../Components/Favo";
import MyCompte from "../Components/MyCompte";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background-color: #7d9fffe3;
  padding: 0 20px;

  & > :nth-child(2) {
    width: 40%;
  }
  & > :nth-child(3) {
    padding: 20px;
    width: 20%;
    font-size: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function Headers() {
  return (
    <Container>
      <Logo />
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
