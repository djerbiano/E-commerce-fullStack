import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Product from "./Product";
import TopVente from "./TopVente";

const Container = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 264px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProductNavigation = styled.div`
  & > :nth-child(1),
  & > :nth-child(2) {
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid;
    border-radius: 10px;
    margin: 10px;
    &:hover {
      color: #fff;
      background-color: hsl(226.32deg 52.29% 21.37%);
      transition: 0.5s;
    }
  }
`;

const ProductsContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ContainerNouvelleCollection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerTopVente = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ffaa55, #fbd2c7);
  border-radius: 10px;
  & > :nth-child(1) {
    & > :nth-child(2) {
      & > * {
        &:hover {
          background-color: transparent;
          color: black;
          transform: scale(1.2);
        }
      }
    }
  }
  @media (max-width: 930px) {
    display: none;
  }
`;
function NouvelleCollection() {
  return (
    <Container>
      <ContainerTopVente>
        <Title>
          <h2>Top Vente</h2>
          <ProductNavigation>
            <MdKeyboardArrowLeft />
            <MdKeyboardArrowRight />
          </ProductNavigation>
        </Title>
        <TopVente />
      </ContainerTopVente>
      <ContainerNouvelleCollection>
        <Title>
          <h2>Nouvelle Collection</h2>
          <ProductNavigation>
            <MdKeyboardArrowLeft />
            <MdKeyboardArrowRight />
          </ProductNavigation>
        </Title>
        <ProductsContainer>
          <Product />
          <Product />
          <Product />
        </ProductsContainer>
      </ContainerNouvelleCollection>
    </Container>
  );
}

export default NouvelleCollection;
