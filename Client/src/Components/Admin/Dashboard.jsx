import styled from "styled-components";
import NewOrders from "./DashboardComponent/Commandes";
import TotalOrders from "./DashboardComponent/Ventes";
import ProductsTotal from "./DashboardComponent/Users";
import Reclamation from "./DashboardComponent/Reclamation";
import Graph from "./DashboardComponent/Graph";
import Graph2 from "./DashboardComponent/Graph2";
import OneLatestOrders from "./DashboardComponent/OneLatestOrders";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 10px 50px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  & > * {
    transition: 0.3s ease;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in-out;
    }
  }
`;

const MainSection = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Chart1 = styled.div`
  background-color: #fff;
  width: 60%;
  min-height: 500px;
  border-radius: 10px;
  padding: 10px;
`;
const Chart2 = styled.div`
  background-color: #fff;
  width: 30%;
  min-height: 400px;
  border-radius: 10px;
  padding: 10px;
`;

const LatestOrders = styled.div`
  background-color: #fff;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
`;

function Dashboard() {
  return (
    <Container>
      <TopSection>
        <TotalOrders />
        <NewOrders />
        <ProductsTotal />
        <Reclamation />
      </TopSection>

      <MainSection>
        <Chart1>
          <h2>Statistique</h2>
          <hr />
          <Graph />
        </Chart1>
        <Chart2>
          <h2>Visiteurs</h2>
          <hr />
          <Graph2 />
        </Chart2>
      </MainSection>

      <LatestOrders>
        <h2>Dernières Commandes</h2>
        <hr />
        <OneLatestOrders status="Livré" />
        <OneLatestOrders status="En cours" />
        <OneLatestOrders status="Annulée" />
      </LatestOrders>
    </Container>
  );
}

export default Dashboard;
