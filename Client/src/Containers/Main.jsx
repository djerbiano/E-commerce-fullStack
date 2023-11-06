import styled from "styled-components";
import AsideBar from "../Components/AsideBar";
import TopVente from "../Components/TopVente";
import TopPub from "../Components/TopPub";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`;

const ContainerAsideBar = styled.div`
  width: 20%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  * {
    margin: 5px;
  }
`;

const ContainerMain = styled.div`
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 70%;
  min-height: 600px;
  margin-top: 20px;
  padding: 20px;
  
`;

function Main() {
  return (
    <Container>
      <ContainerAsideBar>
        <AsideBar />
        <TopVente />
      </ContainerAsideBar>
      <ContainerMain>
        <TopPub />
        <TopPub />
        <TopPub />
      </ContainerMain>
    </Container>
  );
}

export default Main;
