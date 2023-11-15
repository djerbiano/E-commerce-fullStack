import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

function MesInformations() {
  return (
    <Container>
      <h3>Réclamation</h3>
    </Container>
  );
}

export default MesInformations;
