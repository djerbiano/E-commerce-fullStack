import styled from "styled-components";
import ProductLimited from "./ProductLimited";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const ProductEditionLimitée = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
   
    flex-direction: column;
    
  }
`;
function EditionLimitée() {
  return (
    <Container>
      <Title>
        <h2>Édition Limitée</h2>
        <ProductNavigation>
          <MdKeyboardArrowLeft />
          <MdKeyboardArrowRight />
        </ProductNavigation>
      </Title>
      <ProductEditionLimitée>
       <ProductLimited />
       <ProductLimited />
       <ProductLimited />
       <ProductLimited />
      </ProductEditionLimitée>
    </Container>
  );
}

export default EditionLimitée;
