import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  width: 400px;
  height: 300px;
  margin-left: 20px;
  & img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;

    @media (max-width: 980px) {
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > :nth-child(2) {
      margin-top: 10px;
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
  const { id } = useParams();
  const [pictureView, setPictureView] = useState("");
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const changePictureView = (e) => {
    setPictureView(e.target.src);
  };

  //get product
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_SERVER}/api/products/oneProduct/${id}`
        );
        const data = await response.json();
        setProduct(data);

        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSelectedSize(selectedSize);
    const selectedSizeObject = product.colors
      .flatMap((color) => color.sizes)
      .find((size) => size.size === selectedSize);
    setSelectedQuantity(selectedSizeObject ? selectedSizeObject.quantity : 0);
  };

  return (
    <>
      {!product.message ? (
        <Container>
          <ProductContainer>
            <ContainerPhoto>
              <AllPicture>
                <img
                  src={
                    product.pictures &&
                    `${process.env.REACT_APP_URL_SERVER}/images/${product.pictures.pic1}`
                  }
                  alt={product && product.title}
                  onClick={changePictureView}
                />
                <img
                  src={
                    product.pictures &&
                    `${process.env.REACT_APP_URL_SERVER}/images/${product.pictures.pic2}`
                  }
                  alt={product && product.title}
                  onClick={changePictureView}
                />
                <img
                  src={
                    product.pictures &&
                    `${process.env.REACT_APP_URL_SERVER}/images/${product.pictures.pic3}`
                  }
                  alt={product && product.title}
                  onClick={changePictureView}
                />
              </AllPicture>
              <SinglePicture>
                <img
                  src={
                    pictureView
                      ? pictureView
                      : product.pictures &&
                        `${process.env.REACT_APP_URL_SERVER}/images/${product.pictures.pic1}`
                  }
                  alt={product && product.title}
                />
              </SinglePicture>
            </ContainerPhoto>

            <ContainerByProduct>
              <h1>{product.title}</h1>
              <h2
                style={{
                  textDecoration: product.salePrice ? "line-through" : "none",
                }}
              >
                {product.regularPrice} $
              </h2>
              {product.salePrice && <h3>{product.salePrice} $</h3>}
              <label htmlFor="color-select">Couleur :</label>
              <select
                name="couleur"
                id="color-select"
                onChange={handleSizeChange}
              >
                <option value="">--Sélectionnez la couleur--</option>
                {product.colors
                  ? product.colors.map((color) => {
                      return (
                        <option value={color.color} key={color._id}>
                          {color.color}
                        </option>
                      );
                    })
                  : null}
              </select>
              <label htmlFor="taille-select">Taille :</label>
              <select
                name="taille"
                id="taille-select"
                onChange={(e) => handleSizeChange(e)}
                value={selectedSize}
              >
                <option value="">--Sélectionnez la taille--</option>
                {product.colors
                  ? product.colors.map((color) => {
                      const items = color.sizes;
                      return items.map((item) => {
                        return (
                          <option value={item.size} key={item._id}>
                            {item.size}
                          </option>
                        );
                      });
                    })
                  : null}
              </select>

              <div>
                <p>Sélectionner la quantité</p>
                <input
                  type="number"
                  min="1"
                  max={selectedQuantity}
                  defaultValue={1}
                />

                {selectedQuantity > 0 ? (
                  <p
                    style={{
                      color: "grey",
                      fontSize: "1rem",
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    Quantité disponible {selectedQuantity}
                  </p>
                ) : null}
              </div>

              <button type="button">Ajouter au panier</button>
            </ContainerByProduct>
          </ProductContainer>

          <ProductDescription>
            <DetailsProduct style={{ width: "50%" }}>
              <h3>Détail du produit</h3>

              <ul>
                {product.description ? (
                  <>
                    <li>{product.description.desc1}</li>
                    <li>{product.description.desc2}</li>
                    <li>{product.description.desc3}</li>
                  </>
                ) : (
                  <li>Aucune description disponible</li>
                )}
              </ul>
            </DetailsProduct>
            <EntretienProduct style={{ width: "50%" }}>
              <h3>Matière et entretien</h3>
              <ul>
              {product.description ? (
                <>
                  <li>{product.description.desc1}</li>
                  <li>{product.description.desc2}</li>
                  <li>{product.description.desc3}</li>
                </>
              ) : (
                <li>Aucune description disponible</li>
              )}
              </ul>
            </EntretienProduct>
          </ProductDescription>
        </Container>
      ) : (
        <p>Chargement</p>
      )}
    </>
  );
}

export default SingleProduct;
