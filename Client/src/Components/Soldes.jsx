import styled from "styled-components";
import ProductSoldé from "./ProductSoldé";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Soldes() {
  return (
    <Container>
      <ProductSoldé />
      <ProductSoldé />
      <ProductSoldé />
      <ProductSoldé />
    </Container>
  );
}

export default Soldes;
