import styled from "styled-components";
import Headers from "../Containers/Headers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function Home() {
  return (
    <Container>
      <Headers />
    </Container>
  );
}

export default Home;
