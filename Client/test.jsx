import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ValidationChoise from "../../Modal/ValidationChoise";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 10px;
  position: relative;
  background-color: #f5f5f5;
  display: flex;
  @media (max-width: 616px) {
    flex-direction: column;
  }
`;
const DetailsContainer = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;

  @media (max-width: 616px) {
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 20px;
    }
  }
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

  @media (max-width: 616px) {
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    & > * {
      margin-bottom: 10px;
    }
  }
`;
const Menu = styled.div`
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 20px;
    &:hover {
      color: black;
    }
  }

  & > :last-child {
    background-color: red;

    &:hover {
      background-color: #ff0000;
    }
  }
`;

function OneTrakingsCommande() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState("");
  const [err, setErr] = useState("");
  const [patchProductDetails, setPatchProductDetails] = useState("");
  const [modalValidation, setModalValidation] = useState(false);


  // delete product
  const deleteThisProduct = (productId) => {
    setModalValidation(true);
    setPatchProductDetails(productId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_SERVER}/api/orders/${id}`,
          {
            method: "GET",
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Une erreur s'est produite");
        }

        const data = await response.json();

        setProductDetails(data);
      } catch (error) {
        setErr(error);
        console.error("Une erreur s'est produite:", error);
      }
    };

    fetchData();
  }, [id]);
  const Création = productDetails.createdAt
    ? new Date(productDetails.createdAt)
    : null;
  const DerrnièreMiseAJour = productDetails.updatedAt
    ? new Date(productDetails.updatedAt)
    : null;
  return (
    <Container>
      <DetailsContainer>
        {productDetails ? (
          <>
            <Details>
              <h2>User : {productDetails.user}</h2>
              <p>Commande Id : {productDetails._id}</p>
              <p>TrackingNumber : {productDetails.trackingNumber}</p>
              <p>Créer le : {Création ? Création.toLocaleString() : "N/D"}</p>

              <p>Etat : {productDetails.status}</p>
              {/*lenght*/}
              <p>
                Nombre de produit :{" "}
                {productDetails.products
                  ? productDetails.products.length
                  : "N/D"}
              </p>
              <p>Adresse postale : {productDetails.shippingAddress}</p>
              <p>
                Adresse de livraison :
                {productDetails.billingAddress
                  ? productDetails.billingAddress
                  : productDetails.shippingAddress}
              </p>
              <p>Total : {productDetails.total} €</p>
              <p>
                Derrnière modification :
                {DerrnièreMiseAJour
                  ? DerrnièreMiseAJour.toLocaleString()
                  : "N/D"}
              </p>
              {productDetails.products ? (
                productDetails.products.map((product) => {
                  return (
                    <div key={product._id}>
                      <p>{product.product}</p>
                      <p>{product.color}</p>
                      <p>{product.price}</p>
                      <p>{product.quantity}</p>
                      <p>{product.size}</p>
                    </div>
                  );
                })
              ) : (
                <p>N/D</p>
              )}

              {productDetails.statusHistory ? (
                productDetails.statusHistory.map((product) => {
                  return (
                    <div key={product._id}>
                      <p>Commander le :{product.startDate.slice(0, 10)}</p>
                      <p>Etat :{product.status}</p>
                    </div>
                  );
                })
              ) : (
                <p>N/D</p>
              )}
            </Details>
       
            <Menu>
              <button>
                Modifier le produit
              </button>
              <button onClick={() => deleteThisProduct(productDetails._id)}>
                Supprimer
              </button>
            </Menu>
          </>
        ) : err ? (
          <p>{err.message}</p>
        ) : (
          <p> Chargement...</p>
        )}
      </DetailsContainer>

   

      {modalValidation && (
        <ValidationChoise
          setModalValidation={setModalValidation}
          patchProductDetails={patchProductDetails}
        />
      )}
    </Container>
  );
}

export default OneTrakingsCommande;
