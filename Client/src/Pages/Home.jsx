import styled from "styled-components";
import Headers from "../Containers/Headers";
import Main from "../Containers/Main";
import Footer from "../Containers/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  width: 90vw;

 
  
`;

function Home() {
  return (
    <Container>
      <Headers />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;
