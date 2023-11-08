import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Logo from "../Assets/18830882_1200_B.jpg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    transform: scale(1.03);
    transition: all 0.2s;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 930px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px;

  & > :nth-child(2),
  & > :nth-child(3) {
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid;
    border-radius: 10px;

    &:hover {
      color: #fff;
      background-color: hsl(226.32deg 52.29% 21.37%);
      transition: 0.5s;
    }
  }
`;

function TopVente() {
  return (
    <Container>
      <Title>
        <h2>Top Vente</h2>
        <MdKeyboardArrowLeft />
        <MdKeyboardArrowRight />
      </Title>
      <img src={Logo} alt="" />
      <h3>CHEMISE AJUSTEE</h3>
      <h4>200 $</h4>
    </Container>
  );
}

export default TopVente;
