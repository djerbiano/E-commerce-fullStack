import styled from "styled-components";

const Title = styled.h1`
color:white;
  & span {
    color: #fa5;
  }
`;

function Logo() {
  return (
    <>
      <Title>
        Shoping<span>Digital</span>
      </Title>
    </>
  );
}

export default Logo;
