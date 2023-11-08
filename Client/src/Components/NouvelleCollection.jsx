import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Product from "./Product";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

function NouvelleCollection() {
  return (
    <Container>
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
    </Container>
  );
}

export default NouvelleCollection;
