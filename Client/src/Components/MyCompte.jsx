import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListItem = styled(Link)`
  text-decoration: none;
  list-style: none;
  color: white;
  &:hover {
    cursor: pointer;
    color: #fa5;
    font-size: 2rem;
    transition: 0.4s;
  }
`;
function MyCompte() {
  return (
    <Container>
      <ListItem to="/monProfile">
        <FaUserAlt />
      </ListItem>
    </Container>
  );
}

export default MyCompte;
