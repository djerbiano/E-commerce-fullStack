import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 50vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 5px;
  min-width: 20%;
  * {
    margin: 5px;
    padding: 5px;
  }
`;
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    input {
      margin-right: 10px;
      cursor: pointer;
    }
  }
`;

const PriceFilterContainer = styled.div`
  input {
    width: 80px;
    margin-right: 10px;
    border-radius: 50px;
    text-align: center;
  }
`;

const SearchButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a010;
  }
`;
const MainContent = styled.div`
  min-width: 80%;
`;
const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
`;

const ProductItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const FilterComponent = () => {
  const [priceRange, setPriceRange] = useState({ start: "", end: "" });
  const [categories, setCategories] = useState({
    homme: false,
    femme: false,
    informatique: false,
    tvSound: false,
    phone: false,
    smartDevices: false,
  });

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const handlePriceChange = (event, type) => {
    const value = event.target.value;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Categories:", categories);
    console.log("Price Range:", priceRange);
  };

  //product list
  const productList = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
  ];

  return (
    <FilterContainer>
      <Sidebar>
        <CheckboxContainer>
          <label>
            <input
              type="checkbox"
              checked={categories.homme}
              onChange={() => handleCategoryChange("homme")}
            />
            Homme
          </label>

          <label>
            <input
              type="checkbox"
              checked={categories.femme}
              onChange={() => handleCategoryChange("femme")}
            />
            Femme
          </label>
          <label>
            <input
              type="checkbox"
              checked={categories.informatique}
              onChange={() => handleCategoryChange("informatique")}
            />
            Informatique
          </label>
          <label>
            <input
              type="checkbox"
              checked={categories.tvSound}
              onChange={() => handleCategoryChange("tvSound")}
            />
            TV & Sound
          </label>
          <label>
            <input
              type="checkbox"
              checked={categories.phone}
              onChange={() => handleCategoryChange("phone")}
            />
            Smartphones
          </label>
          <label>
            <input
              type="checkbox"
              checked={categories.smartDevices}
              onChange={() => handleCategoryChange("smartDevices")}
            />
            Objets connectés
          </label>
        </CheckboxContainer>

        <PriceFilterContainer>
          <p>Prix :</p>
          <label>
            <input
              type="number"
              placeholder="Start"
              value={priceRange.start}
              min={0}
              onChange={(e) => handlePriceChange(e, "start")}
            />
            <input
              type="number"
              placeholder="End"
              value={priceRange.end}
              min={1}
              onChange={(e) => handlePriceChange(e, "end")}
            />
          </label>
        </PriceFilterContainer>

        <SearchButton onClick={handleSearch}>Trouver</SearchButton>
      </Sidebar>
      <MainContent>
        <ProductList>
          {productList.map((product) => (
            <ProductItem key={product.id}>{product.name}</ProductItem>
          ))}
        </ProductList>
      </MainContent>
    </FilterContainer>
  );
};

export default FilterComponent;
