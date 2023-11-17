import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
  border-bottom: 1px solid;
  position: relative;
`;

const ContainerPhoto = styled.div`
  min-width: 100px;
  max-width: 20%;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const DetailsProduct = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;



  & > :last-child {
    color: #000;
    font-size: 12px;
    background-color: transparent;
    border: 0;
    color: #6e6e6e;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Quantité = styled.div`
  p {
    margin: 10px 0;
  }

  select {
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Total = styled.div`
 margin: 10px 0;
 position: absolute;
 bottom: 20px;
 right: 20px;
`;

function ProductPanier() {
  return (
    <Container>
      <ContainerPhoto>
        <img src={Logo} alt="" />
      </ContainerPhoto>
      <DetailsProduct>
        <h3>CHEMISE AJUSTEE</h3>
        <h4>200 $</h4>
        <p>Couleur: red</p>
        <p>Taille: XS</p>
        <Quantité>
          <p>Qté:</p>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </Quantité>
        <Total>
          <p>Total: 200 $</p>
        </Total>
        <button>Supprimer</button>
      </DetailsProduct>
    </Container>
  );
}

export default ProductPanier;
