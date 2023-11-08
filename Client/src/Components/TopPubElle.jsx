import styled from "styled-components";
import Logo from "../Assets/elle.jpeg";

const Container = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
`;

const Content = styled.div`
  margin-left: 10%;
  & > * {
    margin-bottom: 20px;
  }
  & h2 {
    color: #fa5;
    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }
  & h1 {
    color: white;
    @media (max-width: 310px) {
      font-size: 1rem;
    }
  }

  & button {
    background-color: #fa5;
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: black;
      color: #fa5;
      transition: 0.3s;
      transform: scale(1.1);
    }
    @media (max-width: 300px) {
      font-size: 0.8rem;
    }
  }
`;

function TopPub() {
  return (
    <Container>
      <Content>
        <h1>Vêtements pour ELLE</h1>
        <button type="button">Achetez dès maintenant</button>
      </Content>
    </Container>
  );
}

export default TopPub;
