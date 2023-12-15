import styled from "styled-components";
import Filter from "./ProductsComponent/Filter";
import AddButton from "./ProductsComponent/AddProduct";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;

  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      background-color: rgba(0, 128, 0, 0.8);
      transition: all 0.5s ease;
    }
  }
`;
const ShortSelect = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  select {
    min-width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    &:hover {
    }
  }
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  border-bottom: 1px solid gray;
  color: gray;
  p {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
`;
const Product = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid gray;
  p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

function Products() {
  return (
    <Container>
      <Title>
        <h2>Products</h2>
        <AddButton />
      </Title>
      <ShortSelect>
        <select id=" Category">
          <option value="">Select Category</option>
          <option value="All">All</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
          <option value="Informatique">Informatique</option>
          <option value="Tv - Son">Tv - Son</option>
          <option value="Téléphonie">Téléphonie</option>
          <option value="Objets connectés">Objets connectés</option>
        </select>
        <Filter />
      </ShortSelect>
      <Header>
        <p>Id</p>
        <p>Category</p>
        <p>Name</p>
        <p>Price</p>
        <p>OnSale</p>
        <p>SalePrice</p>
        <p>TopSeller</p>
        <p>NewCollection</p>
        <p>LimitedEdtion</p>
      </Header>
      <Product>
        <p>Gjk56328lkjhy</p>
        <p>Téléphonie</p>
        <p>Iphone 8</p>
        <p>200 $</p>
        <p>true</p>
        <p>120 $</p>
        <p>true</p>
        <p>true</p>
        <p>false</p>
      </Product>
    </Container>
  );
}

export default Products;
