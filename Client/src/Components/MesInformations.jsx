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

  & > h5 {
    font-size: 1.5rem;
  }
  & > p {
    margin-bottom: 20px;
  }

  & > * {
    word-break: break-all;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
    width: auto;
    height: auto;

  }
`;

function MesInformations() {
  return (
    <Container>
      <h3>Mes coordonnées</h3>
      <br />
      <h5>Nom:</h5>
      <p>GHOUDI</p>
      <h5>Prenom:</h5>
      <p>Saber</p>
      <h5>Email:</h5>
      <p>oVZpD@example.com</p>
      <h5>Telephone:</h5>
      <p>0606060606</p>
      <h5>Adresse:</h5>
      <p>14 route de brest 75000 Paris</p>
    </Container>
  );
}

export default MesInformations;
