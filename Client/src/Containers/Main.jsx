import styled from "styled-components";
import AsideBar from "../Components/AsideBar";
import TopPub from "../Components/TopPub";
import Nouveautés from "../Components/Nouveautés";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`;

const ContainerAsideBar = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  * {
    margin: 5px;
  }

  & > :nth-child(1) {
    width: 15%;
    min-height: 60vh;
  }

  & > :nth-child(2) {
    width: 70vw;
  }
  @media (max-width: 1250px) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      width: 100%;
      height: auto;
      min-height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      font-weight: bold;
    }
    & > :nth-child(2) {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    & > :nth-child(1) {
      display: none;
    }
  }
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: 600px;
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const ContainerAfterMain = styled.div`
  display: flex;
  flex-direction: column;
`;

function Main() {
  return (
    <Container>
      <ContainerAsideBar>
        <AsideBar />
        <TopPub />
      </ContainerAsideBar>
      <ContainerMain>
        <TopPub />
        <Nouveautés />
      </ContainerMain>
      <ContainerAfterMain></ContainerAfterMain>
    </Container>
  );
}

export default Main;
