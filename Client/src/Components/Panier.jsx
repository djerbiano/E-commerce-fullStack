import styled from "styled-components";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    position: relative;
  }
`;

const Dd = styled.div`
  position: relative;
`;

const Notification = styled.div`
  position: absolute;
  bottom: 70%;
  left: 80%;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    331deg,
    rgba(255, 255, 255, 1) 1%,
    rgba(9, 121, 44, 1) 50%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: black;
  font-weight: bold;
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
function Panier() {
  return (
    <Container>
      <ListItem to="/panier">
        <Dd>
          <BsFillCartCheckFill />
          <Notification>0</Notification>
        </Dd>
      </ListItem>
    </Container>
  );
}

export default Panier;
