import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 94%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  width: 50%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
      color: white;
      background-color: #0077ff;
      transition: 0.5s;
      margin: 20px;
      &:hover {
        transition: 0.5s;
        transform: scale(1.2);
      }
    }

    button:nth-child(1) {
      background-color: #ff0000;
    }

    button:nth-child(2) {
      background-color: green;
    }
  }
`;
function ValidationChoise({ setModalValidation, patchProductDetails }) {
  const navigate = useNavigate();

  const deleteThisProduct = async () => {
    try {
      await fetch(
        `${process.env.REACT_APP_URL_SERVER}/api/products/deleteProduct/${patchProductDetails}`,
        {
          method: "DELETE",
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/admin/products`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <Container>
      <Content>
        <h1>Vous voulez vraiment supprimer le produit ?</h1>
        <div>
          <button onClick={deleteThisProduct}>Oui</button>
          <button onClick={() => setModalValidation(false)}>Non</button>
        </div>
      </Content>
    </Container>
  );
}

export default ValidationChoise;
