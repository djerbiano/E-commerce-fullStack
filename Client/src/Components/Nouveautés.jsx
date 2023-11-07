import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  background-color:red;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function Nouveautés() {
  return <Container>
  <ContentContainer>
    <h1>Nouveautés</h1>
  </ContentContainer>
  </Container>;
}

export default Nouveautés;
