import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 20px;
  & > * {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  & > :nth-child(2),
  & > :nth-child(4) {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    @media (max-width: 360px) {
      width: 100%;
    }

    &:hover {
      border: 1px solid #000;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }
  }
  & > :nth-child(6) {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 70%;
    height: 200px;
    resize: none;
    &:hover {
      border: 1px solid #000;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1500px) {
      width: 100%;
    }
  }

  & > button {
    margin-left: auto;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #60c660b3;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: all 0.1s ease-in-out;
      border-radius: 0px;
    }
  }
`;

function NousContacter() {
  return (
    <Container>
      <h3>Nous contacter</h3>

      <Form>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="5" cols="30" required />

        <button type="submit">Envoyer</button>
      </Form>
    </Container>
  );
}

export default NousContacter;
