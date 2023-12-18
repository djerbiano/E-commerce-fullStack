import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PicturesView from "../../Modal/PicturesView";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  background-color: #f5f5f5;
  display: flex;
`;
const DetailsContainer = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
`;

const Details = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
  }
`;
const Menu = styled.div`
  width: 20%;
  background-color: red;
  border-radius: 5px;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-right: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;
function OneProduct() {
  const [opModal, setOpModal] = useState(false);
  const [pictures, setPictures] = useState(null);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState("");

  const handlePicture = (e) => {
    setOpModal(true);
    setPictures(e.target.src);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_SERVER}/api/products/oneProduct/${id}`,
          {
            method: "GET",
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();

        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);
  const Création = productDetails.createdAt
    ? new Date(productDetails.createdAt)
    : null;

  return (
    <Container>
      <DetailsContainer>
        {productDetails ? (
          <>
            <Details>
              <h2>{productDetails.title}</h2>
              <p>Prix: {productDetails.regularPrice} $</p>
              <p>En promotion: {productDetails.isOnSale.toString()}</p>
              <p>
                Prix promotion:{" "}
                {productDetails.salePrice
                  ? productDetails.salePrice
                  : Number(productDetails.salePrice)}
              </p>
              <p>Top vente: {productDetails.isTopSeller.toString()}</p>
              <p>
                Nouvelle collection: {productDetails.isNewCollection.toString()}
              </p>
              <p>
                Edition limitée: {productDetails.isLimitedEdition.toString()}
              </p>
              <p>Description 1: {productDetails.description.desc1}</p>
              <p>Description 2: {productDetails.description.desc2}</p>
              <p>Description 3: {productDetails.description.desc3}</p>

              <p>Catégorie: {productDetails.category}</p>
              <p>Stock: {productDetails.stock.toString()}</p>
              <p>Couleurs : {productDetails.colors[0].color}</p>
              <p>Tailles : {productDetails.colors[0].sizes[0].size}</p>
              <p>Quantité : {productDetails.colors[0].sizes[0].quantity}</p>
              <p>Id : {productDetails._id}</p>
              <p>Créer le : {Création ? Création.toLocaleString() : "N/A"}</p>
            </Details>
            <Image>
              <img
                src={`${process.env.REACT_APP_URL_SERVER}/images/${productDetails.pictures.pic1}`}
                alt="Product"
                onClick={handlePicture}
              />
              <img
                src={`${process.env.REACT_APP_URL_SERVER}/images/${productDetails.pictures.pic2}`}
                alt="Product"
                onClick={handlePicture}
              />
              <img
                src={`${process.env.REACT_APP_URL_SERVER}/images/${productDetails.pictures.pic3}`}
                alt="Product"
                onClick={handlePicture}
              />
            </Image>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </DetailsContainer>
      <Menu></Menu>
      {opModal && <PicturesView setOpModal={setOpModal} pictures={pictures} />}
    </Container>
  );
}

export default OneProduct;
