import styled from "styled-components";
import { Link } from "react-router-dom";
const Title = styled.h1`
  color: white;
  & span {
    color: #fa5;
  }
`;
const ListItem = styled(Link)`
  text-decoration: none;
`;

function Logo() {
  return (
    <ListItem to="/">
      <Title>
        Shoping<span>Digital</span>
      </Title>
    </ListItem>
  );
}

export default Logo;
