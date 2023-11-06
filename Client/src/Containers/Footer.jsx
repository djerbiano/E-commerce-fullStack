import styled from "styled-components";

const Container = styled.div`
  width: 100%;
    height: 60px;
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    padding-top: 20px;
    

`;

function Footer() {
  return (
    <Container>
      <p>Copyright © 2023 ShopingDigital. Tous droits réservés.</p>
    </Container>
  );
}

export default Footer;
