import styled from "styled-components";
import Filter from "../Components/Filter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  width: 90vw;
`;

function FilterProducts() {
 
  return (
    <Container>
      <Filter />
    </Container>
  );
}

export default FilterProducts;
