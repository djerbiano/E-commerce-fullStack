import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  button {
    width: 60px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease;
    }
  }
`;

const FilterMenuu = styled.div`
  width: 200px;
  height: 300px;
  margin-top: 5px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;

  input {
    margin: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;
    }
  }

  label {
    cursor: pointer;
  }
`;

function Filter() {
  const [filterMenu, setFilterMenu] = useState(false);
  return (
    <Container>
      <button type="button" onClick={() => setFilterMenu(!filterMenu)}>
        Filter
      </button>

      {filterMenu && (
        <FilterMenuu>
          <div>
            <input type="checkbox" name="OnSale" id="OnSale" />
            <label htmlFor="OnSale"> OnSale</label>
          </div>
          <div>
            <input type="checkbox" name="TopSeller" id="TopSeller" />
            <label htmlFor="TopSeller">TopSeller</label>
          </div>
          <div>
            <input type="checkbox" name="NewCollection" id="NewCollection" />
            <label htmlFor="NewCollection"> NewCollection</label>
          </div>
          <div>
            <input type="checkbox" name="LimitedEdtion" id="LimitedEdtion" />
            <label htmlFor="LimitedEdtion"> LimitedEdtion</label>
          </div>
        </FilterMenuu>
      )}
    </Container>
  );
}

export default Filter;
