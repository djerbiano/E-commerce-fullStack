import styled from "styled-components";
import TopVente from "../Components/TopVente";
import NouvelleCollection from "../Components/NouvelleCollection";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  & > :nth-child(1) {
    width: 20%;
    @media (max-width: 1400px) {
      width: 25%;
    }
  }

  & > :nth-child(2) {
    width: 70%;

    @media (max-width: 930px) {
      width: 100%;
    }
  }
`;

function Nouveautés() {
  return (
    <Container>
      <ContentContainer>
        <TopVente />
        <NouvelleCollection />
      </ContentContainer>
    </Container>
  );
}

export default Nouveautés;
