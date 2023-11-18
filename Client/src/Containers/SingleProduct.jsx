import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg";
import Logo2 from "../Assets/elle.jpeg";
import Logo3 from "../Assets/soldes.jpg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  width: 90vw;

  * > img {
    cursor: pointer;
    border-radius: 10px;

    @media (max-width: 300px) {
      width: 80vw !important;
    }
  }

  
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 20px;
  padding: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContainerPhoto = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-evenly;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;

    & > :nth-child(1) {
      display: flex;
      flex-direction: row;
      margin: 20px;

      & > img {
        margin-right: 5px;
      }
    }
  }
`;
const AllPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & img {
    width: 100px;
    aspect-ratio: 1;
    margin-bottom: 10px;
    object-fit: contain;
    &:hover {
      border: 1px solid black;
    }

    @media (max-width: 300px) {
      width: 25vw !important;
      margin-right: 10px;
    }
  }
`;
const SinglePicture = styled.div`
  & img {
    width: 400px;
    height: 600px;
    object-fit: cover;

    @media (max-width: 980px) {
      width: 300px;
      height: 300px;
    }
  }
`;
const ContainerByProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 30%;
  min-height: 400px;
  font-size: 1.2rem;
  margin-bottom: 20px;

  & > :nth-child(4),
  & > :nth-child(6) {
    padding: 5px;
    border-radius: 10px;
  }
  & > :nth-child(7) {
    & > :nth-child(2) {
      width: 40px;
      height: 40px;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
    }
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    width: 100%;
    align-items: center;

    & > * {
      display: flex;
      & > * {
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 360px) {
    & > :nth-child(1) {
      font-size: 8vw;
    }
  }
  @media (max-width: 200px) {
    & > :nth-child(4),
    & > :nth-child(6) {
      width: 100%;
    }

    & > :nth-child(7) {
      & > :nth-child(2) {
        width: 100%;
        text-align: center;
      }
    }
  }
  & > :last-child {
    padding: 10px;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: black;
      color: white;
      font-weight: bold;
    }
  }
`;

const ProductDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  padding: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const DetailsProduct = styled.div`
  padding: 10px;
  * {
    margin-bottom: 10px;
  }

  & h3 {
    margin-left: -20px;
  }
`;
const EntretienProduct = styled.div`
  padding: 10px;
  * {
    margin-bottom: 10px;
  }
  & h3 {
    margin-left: -20px;
  }
`;
function SingleProduct() {
  const [pictureView, setPictureView] = useState("");
  const changePictureView = (e) => {
    setPictureView(e.target.src);
  };

  return (
    <Container>
      <ProductContainer>
        <ContainerPhoto>
          <AllPicture>
            <img src={Logo} alt="" onClick={changePictureView} />
            <img src={Logo2} alt="" onClick={changePictureView} />
            <img src={Logo3} alt="" onClick={changePictureView} />
          </AllPicture>
          <SinglePicture>
            <img src={pictureView ? pictureView : Logo} alt="" />
          </SinglePicture>
        </ContainerPhoto>

        <ContainerByProduct>
          <h1>CHEMISE AJUSTEE</h1>
          <h2>200 $</h2>
          <label htmlFor="color-select">Couleur :</label>
          <select name="couleur" id="color-select">
            <option value="">--Sélectionnez la couleur--</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>

          <label htmlFor="taille-select">Taille :</label>
          <select name="taille" id="taille-select">
            <option value="">--Sélectionnez la taille--</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>

          <div>
            <p>Sélectionner la quantité</p>
            <input type="number" min="1" max="10" defaultValue={1} />
          </div>

          <button type="button">Ajouter au panier</button>
        </ContainerByProduct>
      </ProductContainer>

      <ProductDescription>
        <DetailsProduct>
          <h3>Détail du produit</h3>
          <ul>
            <li>Col: Col requin</li>
            <li>Fermeture: Boutons</li>
            <li>Niveau de transparence: Légère</li>
            <li>Motif / Couleur: Couleur unie</li>
          </ul>
        </DetailsProduct>
        <EntretienProduct>
          <h3>Matière et entretien</h3>
          <ul>
            <li>100% coton</li>
            <li>
              Conseils d'entretien: Lavage en machine à 40 °C Ne pas mettre au
              sèche-linge Blanchiment interdit
            </li>
          </ul>
        </EntretienProduct>
      </ProductDescription>
    </Container>
  );
}

export default SingleProduct;
