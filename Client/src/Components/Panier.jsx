import styled from "styled-components";
import { BsFillCartCheckFill } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

function Panier() {
  return (
    <Container>
      <BsFillCartCheckFill />
    </Container>
  )
}

export default Panier