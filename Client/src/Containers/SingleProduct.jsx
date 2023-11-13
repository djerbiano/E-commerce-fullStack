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
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  margin-top: 20px;
  padding: 10px;
`;

const ContainerPhoto = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 40%;
`;
const AllPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 10%;

  & img {
    width: 50px;
   aspect-ratio: 1;
    margin-bottom: 10px;
    object-fit : contain;
    &:hover {
      border: 1px solid black;
    }
  }
`;
const SinglePicture = styled.div`
  & img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
`;
const ContainerByProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  min-height: 300px;
`;

const ProductDescription = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
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
          <h2>CHEMISE AJUSTEE</h2>
          <h4>200 $</h4>
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

      <ProductDescription>desc</ProductDescription>
    </Container>
  );
}

export default SingleProduct;
