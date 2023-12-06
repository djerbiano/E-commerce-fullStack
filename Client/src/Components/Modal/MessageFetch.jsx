import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Content = styled.div`
  width: 50vw;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  border-radius: 10px;

  z-index: 1;

  h3 {
    margin-bottom: 2rem !important;
    text-align: center !important;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #fa5;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
      transition: 0.5s;
    }
  }
`;

function MessageFetch({ message, setOpModal }) {
  const closeModal = () => {
    setOpModal(false);
  }
  return (
    <Container>
      <Content>
        <h3> {message} </h3>
        <button onClick={closeModal}> Fermer </button>
      </Content>
    </Container>
  );
}

export default MessageFetch;
