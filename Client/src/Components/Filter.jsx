import React, { useState } from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  margin-top: 20px;
  font-size: 1.2rem;
  position: relative;

  @media (max-width: 1150px) {
    flex-direction: column;

   
    & .open {
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    }

    & .closed {
      transform: translateX(-110%);
      transition: transform 0.3s ease-in-out;
    }

    & > :nth-child(2) {
      position: absolute;
      top: -20px;
      right: -60px;
      z-index: 1;
    }
    & > :nth-child(3) {
      position: absolute;
      top: 20px;
      right: 0;
    }
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 50vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
  min-width: 20%;
  * {
    margin: 5px;
    padding: 5px;
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 100%;
    min-height: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    background-color: white;
  }
`;

const SidebarClose = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  margin-bottom: 10px;
  padding: 5px;


  & > :nth-child(1) {
    cursor: pointer;
    color: #1a2753;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
      color: #fa5;
    }
  }
  @media (min-width: 1150px) {
    display: none;
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

  @media (max-width: 1150px) {
    flex-direction: row;
    flex-wrap: wrap;
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

  @media (max-width: 1150px) {
    width: 100%;
  }

  &:hover {
    background-color: #45a010;
  }
`;
const MainContent = styled.div`
  min-width: 80%;

  @media (max-width: 1150px) {
    min-width: 100%;
  }
`;
const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const ProductItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 5px;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  height: 200px;
`;

const FilterComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <FilterContainer>
      <Sidebar className={isSidebarOpen ? "open" : "closed"}>
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

      <SidebarClose> 
       <FaWindowClose onClick={toggleSidebar} />
      </SidebarClose>
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
