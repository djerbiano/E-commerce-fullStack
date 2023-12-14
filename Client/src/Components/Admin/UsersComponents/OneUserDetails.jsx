import styled from "styled-components";
import { IoChevronBackOutline } from "react-icons/io5";
import Logo from "../../../Assets/avatarDefault.jpg";
import OrdersForUser from "./OrdersForUser";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BackButton = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  background-color: hsl(226.32deg 52.29% 21.37%);
  color: white;
  font-size: 20px;
  margin: 10px 10px;
  border-radius: 10px;
  &:hover {
    background-color: hsl(226.32deg 52.29% 21.37%);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  button {
    border: none;
    background-color: hsl(226.32deg 52.29% 21.37%);
    color: white;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      transition: all 0.3s ease;
    }
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #e6e6e6;
`;
const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Picture = styled.div`
  width: 300px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid hsl(226.32deg 52.29% 21.37%);

  div {
    width: 80%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid hsl(226.32deg 52.29% 21.37%);
    }
  }
`;
const Info = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;

  h1 {
    margin-bottom: 40px;
  }

  & > :nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    div {
      width: 200px;
      margin-bottom: 20px;
    }
  }
`;

const ActionButton = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  button {
    width: 200px;
    height: 50px;
    background-color: hsl(226.32deg 52.29% 21.37%);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      opacity: 0.8;
      transition: all 0.3s ease;

    }

  }

`;

function OneUserDetails() {
  return (
    <Container>
      <BackButton onClick={() => window.history.back()}>
        <IoChevronBackOutline />
        <button>Retour</button>
      </BackButton>
      <Section>
        <InfoContainer>
          <Picture>
            <div>
              <img src={Logo} alt="" />
            </div>
            <h1>Eric DUPOND</h1>
            <p>UserId: 6hg521v4ggh552 </p>
            <p>Inscrit le: 10/05/2022</p>
          </Picture>
          <Info>
            <h1>Informations</h1>
            <div>
              <div>
                <p>Name</p>
                <p>Eric</p>
                <p>LastName</p>
                <p>DUPOND</p>
                <p>Phone</p>
                <p>0033 00 00 00 00</p>
              </div>
              <div>
                <p>Email</p>
                <p>ericd@gmail.com</p>
                <p>Valide</p>
              </div>
              <div>
                <p>Adresse</p>
                <p>1 rue de test 75000 PARIS </p>
              </div>
            </div>

            <ActionButton>
              <button>Supprimer le compte</button>
              <button>Bannir le compte</button>
            </ActionButton>
          </Info>
        </InfoContainer>
        <OrdersForUser />
      </Section>
    </Container>
  );
}

export default OneUserDetails;
