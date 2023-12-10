import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg";
import { GrFavorite } from "react-icons/gr";
const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  & > :last-child {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      scale: 1.2;
      transition: all 0.2s;

      & > * {
        fill: #fa5;
      }
    }
  }
`;

function TopVente() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <h3>CHEMISE AJUSTEE</h3>
      <h4>200 $</h4>
      <GrFavorite title="Ajouter aux favoris" />
    </Container>
  );
}

export default TopVente;
