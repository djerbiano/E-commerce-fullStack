import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Container = styled.div`
  width: 50vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;

  & > label {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    * {
      font-size: 1.5rem;
    }
  }

  & > input {
    width: 100%;
    height: 50%;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 0 10px;
  }
`;

function InputSearch() {
  return (
    <Container>
      <label htmlFor="search">
        <BsSearch />
      </label>
      <input type="search" placeholder="Recherche" id="search" />
    </Container>
  );
}

export default InputSearch;
