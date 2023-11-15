import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ContainerCommandes = styled.div`
  width: 100%;
`;

const Commande = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  & > * {
    margin-right: 20px;
    border: 1px solid black;
    padding: 20px;
  }
`;

function MesInformations() {
  return (
    <Container>
      <h3>Mes commandes</h3>

      <ContainerCommandes>
        <Commande>
          <div>Commandé le 12/10/2020</div>
          <div>Numéro de commande</div>
          <div>Total: 200 $</div>
        </Commande>
      </ContainerCommandes>
    </Container>
  );
}

export default MesInformations;
