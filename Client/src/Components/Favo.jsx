import styled from "styled-components";
import { MdFavorite } from "react-icons/md";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

function Favo() {
  return (
    <Container>
      <MdFavorite />
    </Container>
  )
}

export default Favo