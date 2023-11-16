import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ContainerCommandes = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Commande = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: white;
`;

const TitleCommande = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid black;

  & > * {
    padding: 20px;
    margin: 10px;
  }
`;

const Details = styled.div``;

const Product = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;

  & > :nth-child(1) {
    width: 50px;
    height: 50px;
    margin-right: 20px;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

function MesInformations() {
  return (
    <Container>
      <h3>Mes commandes</h3>

      <ContainerCommandes>
        <Commande>
          <TitleCommande>
            <div>
              <p>Commandé le 12/10/2020</p>
            </div>
            <div>
              <p>Numéro de commande XJ568GT</p>
            </div>
            <div>
              <p>Total : 200$</p>
            </div>
          </TitleCommande>
          <Details>
            <Product>
              <div>
                <img src={Logo} alt="" />
              </div>
              <div>
                <p>Chemise ajustée</p>
              </div>
            </Product>
            <Product>
              <div>
                <img src={Logo} alt="" />
              </div>
              <div>
                <p>Chemise ajustée</p>
              </div>
            </Product>
          </Details>
        </Commande>
        
      </ContainerCommandes>
    </Container>
  );
}

export default MesInformations;
