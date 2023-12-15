import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
`;

const ContainerInfo = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: gray;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
`;
function OrdersForUser() {
  return (
    <Container>
      <h2>Liste des commandes</h2>
      <ContainerInfo>
        <Header>
          <p>TrackingNumber</p>
          <p>Date</p>
          <p>Paiement</p>
          <p>Pays</p>
          <p>Status</p>
          <p>Total</p>
        </Header>

        <Content>
          <p>gfs12df5ds8sd</p>
          <p>12/12/2023</p>
          <p>**** **** **** 7852</p>
          <p>France</p>
          <p>Livré</p>
          <p>50 $</p>
        </Content>
        <Content>
          <p>gfs12df5ds8sd</p>
          <p>12/12/2023</p>
          <p>**** **** **** 7852</p>
          <p>France</p>
          <p>Livré</p>
          <p>50 $</p>
        </Content>
        <Content>
          <p>gfs12df5ds8sd</p>
          <p>12/12/2023</p>
          <p>**** **** **** 7852</p>
          <p>France</p>
          <p>Livré</p>
          <p>50 $</p>
        </Content>
        <Content>
          <p>gfs12df5ds8sd</p>
          <p>12/12/2023</p>
          <p>**** **** **** 7852</p>
          <p>France</p>
          <p>Livré</p>
          <p>50 $</p>
        </Content>
        <Content>
          <p>gfs12df5ds8sd</p>
          <p>12/12/2023</p>
          <p>**** **** **** 7852</p>
          <p>France</p>
          <p>Livré</p>
          <p>50 $</p>
        </Content>
      </ContainerInfo>
    </Container>
  );
}

export default OrdersForUser;
