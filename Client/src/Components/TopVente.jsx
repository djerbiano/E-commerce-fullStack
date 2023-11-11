import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg";

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;


  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 10px;
  }

 
`;

function TopVente() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <h3>CHEMISE AJUSTEE</h3>
      <h4>200 $</h4>
    </Container>
  );
}

export default TopVente;
