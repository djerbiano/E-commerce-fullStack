import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg"

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  button {
    background-color: #ffaa55;
    color: #ffffff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1a2753;
    }
  }
`;

const FavoContent = () => {
  return (
    <FavoritesContainer>
      <h2>Produits Favoris</h2>

      <ProductContainer>
        <ProductCard>
          <img src={Logo} alt="" />
          <h3>titre</h3>
          <p>Prix: 200€</p>
          <button>Ajouter au Panier</button>
        </ProductCard>

        <ProductCard>
        <img src={Logo} alt="" />
        <h3>titre</h3>
        <p>Prix: 200€</p>
        <button>Ajouter au Panier</button>
      </ProductCard>

      <ProductCard>
      <img src={Logo} alt="" />
      <h3>titre</h3>
      <p>Prix: 200€</p>
      <button>Ajouter au Panier</button>
    </ProductCard>
      </ProductContainer>
    </FavoritesContainer>
  );
};

export default FavoContent;
