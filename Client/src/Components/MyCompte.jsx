import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MyCompte() {
  return (
    <Container>
      <FaUserAlt />
    </Container>
  );
}

export default MyCompte;
