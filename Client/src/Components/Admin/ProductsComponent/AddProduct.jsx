import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
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

const Add = styled.div`
  width: 900px;
  min-height: 500px;
  margin-top: 5px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 150%;
  top: -200%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  z-index: 1;

  label {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    margin-top: 5px;
    padding: 0 10px;
    font-size: 12px;
    margin-left: 10px;
    &:focus {
      outline: none;
      border: 1px solid rgba(0, 128, 0, 0.8);
      transition: all 0.5s ease;
      box-shadow: 0 0 10px rgba(0, 128, 0, 0.1);
    }
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  input[type="file"] {
    border: none;
  }

  & > :last-child {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    & > :last-child {
      background-color: red;
    }
  }
`;

const Category = styled.div`
  select {
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    margin-top: 5px;
    padding: 0 10px;
    font-size: 12px;
    &:focus {
      border: 1px solid rgba(0, 128, 0, 0.8);
      transition: all 0.5s ease;
      box-shadow: 0 0 10px rgba(0, 128, 0, 0.1);
    }
  }
`;

const ContainerChechAndTitle = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  & > :nth-child(1) {
    & > * {
      display: flex;
      flex-direction: column;

      & > * {
        margin: 5px 0;
      }
    }
  }

  & > :nth-child(2) {
    display: flex;

    margin: 0 50px;
    input {
      margin-right: 10px;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px;
  }

  input {
    width: 50%;
    height: 30px;
  }
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px;
  }
`;

const Color = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px;

    & > * {
      margin: 10px;
    }
  }
`;

function AddProduct() {
  const [addProductDiv, setAddProductDiv] = useState(false);
  return (
    <Container>
      <button type="button" onClick={() => setAddProductDiv(!addProductDiv)}>
        Add Product
      </button>
      {addProductDiv && (
        <Add>
          <Category>
            <select id=" Category">
              <option value="">Select Category</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Informatique">Informatique</option>
              <option value="Tv - Son">Tv - Son</option>
              <option value="Téléphonie">Téléphonie</option>
              <option value="Objets connectés">Objets connectés</option>
            </select>
          </Category>

          <ContainerChechAndTitle>
            {/*title */}
            <div>
              <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Title" required />
              </div>

              <div>
                <label htmlFor="regularPrice">Price</label>
                <input
                  type="number"
                  id="regularPrice"
                  placeholder="regularPrice"
                  required
                />
              </div>

              <div>
                <label htmlFor="salePrice">Sale Price</label>
                <input type="number" id="salePrice" placeholder="salePrice" />
              </div>
            </div>
            {/*check*/}
            <div>
              <div>
                <input type="checkbox" id="isOnSale" />
                <label htmlFor="isOnSale">isOnSale</label>
              </div>

              <div>
                <input type="checkbox" id="isTopSeller" />
                <label htmlFor="isTopSeller">isTopSeller</label>
              </div>

              <div>
                <input type="checkbox" id="isNewCollection" />
                <label htmlFor="isNewCollection">isNewCollection</label>
              </div>

              <div>
                <input type="checkbox" id="isLimitedEdition" />
                <label htmlFor="isLimitedEdition">isLimitedEdition</label>
              </div>
            </div>
          </ContainerChechAndTitle>
          <Description>
            <p>Description :</p>
            <label htmlFor="desc1">Desc1</label>
            <input type="text" id="desc1" placeholder="Desc1" required />
            <label htmlFor="desc2">Desc2</label>
            <input type="text" id="desc2" placeholder="Desc2" required />
            <label htmlFor="desc3">Desc3</label>
            <input type="text" id="desc3" placeholder="Desc3" required />
          </Description>

          <Images>
            <p>Images :</p>
            <label htmlFor="pic1">Image 1</label>
            <input type="file" id="pic1" />
            <label htmlFor="pic2">Image 2</label>
            <input type="file" id="pic2" />
            <label htmlFor="pic3">Image 3</label>
            <input type="file" id="pic3" />
          </Images>

          <Color>
            <p>Colors :</p>
            <div>
              <label htmlFor="color1">Color 1</label>
              <input type="text" id="color1" />
              <label htmlFor="sizes1">Sizes</label>
              <input type="text" id="sizes1" placeholder="Sizes" />
              <label htmlFor="quantity1">Quantity</label>
              <input type="number" id="quantity1" placeholder="Quantity" />
            </div>
            <div>
              <label htmlFor="color2">Color 2</label>
              <input type="text" id="color2" />
              <label htmlFor="sizes2">Sizes</label>
              <input type="text" id="sizes2" placeholder="Sizes" />
              <label htmlFor="quantity2">Quantity</label>
              <input type="number" id="quantity2" placeholder="Quantity" />
            </div>

            <div>
              <label htmlFor="color3">Color 3</label>
              <input type="text" id="color3" />
              <label htmlFor="sizes3">Sizes</label>
              <input type="text" id="sizes3" placeholder="Sizes" />
              <label htmlFor="quantity3">Quantity</label>
              <input type="number" id="quantity3" placeholder="Quantity" />
            </div>
          </Color>

          <div>
            <button>Add</button>
            <button onClick={() => setAddProductDiv(!addProductDiv)}>
              Annuler
            </button>
          </div>
        </Add>
      )}
    </Container>
  );
}

export default AddProduct;
