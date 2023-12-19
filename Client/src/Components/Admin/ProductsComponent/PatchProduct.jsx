import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  //background-color: rgba(0, 0, 0, 94%);
  background-color: rgba(0, 0, 0, 54%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  width: 80%;
  min-height: 70vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    button {
      padding: 10px;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: green;
      cursor: pointer;
      width: 100px;
      align-self: flex-end;
      transition: 0.3s;
      &:hover {
        background-color: darkgreen;
        transition: 0.3s;
      }
    }
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  select {
    padding: 10px;
    border-radius: 5px;
    appearance: none;
    cursor: pointer;
  }

  & > :nth-child(2) {
    gap: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    input {
      cursor: pointer;
      width: 20px;
      height: 20px;
      accent-color: #000;
      margin-right: 5px;
    }
  }
`;
const Checkbox = styled.div``;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  min-width: 300px;
  min-height: 300px;
  border-radius: 5px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    width: 100%;
    font-size: 16px;
    &:focus {
      border-color: green;
    }
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  min-width: 400px;
  min-height: 300px;
  border-radius: 5px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    width: 100%;
    font-size: 16px;
    &:focus {
      border-color: green;
    }
  }
`;
const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  min-width: 400px;
  min-height: 300px;
  border-radius: 5px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    width: 100%;
    font-size: 16px;
    &:focus {
      border-color: green;
    }
  }
`;
const Colors = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin: 20px 0;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    font-size: 16px;
    &:focus {
      border-color: green;
    }
  }
  & > :nth-child(2) {
    & > * {
      margin: 5px;
    }
  }
`;

const Containers = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 5px;
`;

function PatchProduct({ setPatchProduct, patchProductDetails }) {
  const [product, setProduct] = useState({});

  //Get Product details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_SERVER}/api/products/oneProduct/${patchProductDetails}`,
          {
            method: "GET",
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [patchProductDetails]);

  

  return (
    <Container>
      <Content>
        <form>
          <Category>
            <select id="partchProductCategory">
              <option value="">
                {product.category || "Selectionner la catégorie"}
              </option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Informatique">Informatique</option>
              <option value="Tv - Son">Tv - Son</option>
              <option value="Téléphonie">Téléphonie</option>
              <option value="Objets connectés">Objets connectés</option>
            </select>
            <Checkbox>
              <label htmlFor="isOnSale">IsOnSale</label>
              <input
                type="checkbox"
                id="isOnSale"
                name="isOnSale"
                //checked={product.isOnSale || false}
                defaultChecked={product.isOnSale || false}
              />
              <label htmlFor="isTopSeller">isTopSeller</label>
              <input
                type="checkbox"
                id="isTopSeller"
                name="isTopSeller"
                //checked={product.isTopSeller || false}
                defaultChecked={product.isTopSeller || false}
              />
              <label htmlFor="isNewCollection">isNewCollection</label>
              <input
                type="checkbox"
                id="isNewCollection"
                name="isNewCollection"
                //checked={product.isNewCollection || false}
                defaultChecked={product.isNewCollection || false}
              />
              <label htmlFor="isLimitedEdition">isLimitedEdition</label>
              <input
                type="checkbox"
                id="isLimitedEdition"
                name="isLimitedEdition"
                //checked={product.isLimitedEdition || false}
                defaultChecked={product.isLimitedEdition || false}
              />
              <label htmlFor="stock">stock</label>
              <input
                type="checkbox"
                id="stock"
                name="stock"
                //checked={product.stock || false}
                defaultChecked={product.stock || false}
              />
            </Checkbox>
          </Category>
          <Containers>
            <Details>
              <p>Détails:</p>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder={product.title || ""}
              />
              <label htmlFor="regularPrice">Price</label>
              <input
                type="number"
                id="regularPrice"
                name="regularPrice"
                placeholder={product.regularPrice || ""}
              />
              <label htmlFor="salePrice">Sale Price</label>
              <input
                type="number"
                id="salePrice"
                name="salePrice"
                placeholder={product.salePrice || "non soldé"}
              />
            </Details>

            <Description>
              <p>Description:</p>
              <label htmlFor="desc1">desc1</label>
              <input
                type="text"
                id="desc1"
                name="desc1"
                placeholder={
                  product.description ? product.description.desc1 : " "
                }
              />
              <label htmlFor="desc2">desc2</label>
              <input
                type="text"
                id="desc2"
                name="desc2"
                placeholder={
                  product.description ? product.description.desc2 : " "
                }
              />
              <label htmlFor="desc3">desc3</label>
              <input
                type="text"
                id="desc3"
                name="desc3"
                placeholder={
                  product.description ? product.description.desc3 : " "
                }
              />
            </Description>
            <Pictures>
              <p>Pictures:</p>
              <label htmlFor="pic1">pic1</label>
              <input type="file" id="pic1" name="pic1" />
              <label htmlFor="pic2">pic2</label>
              <input type="file" id="pic2" name="pic2" />
              <label htmlFor="pic3">pic3</label>
              <input type="file" id="pic3" name="pic3" />
            </Pictures>
          </Containers>
          <Colors>
            <p>Colors :</p>
            <div>
              <label htmlFor="color01">Color 1</label>
              <input
                type="text"
                id="color01"
                name="color1"
                placeholder={product.colors ? product.colors[0].color : ""}
              />
              <label htmlFor="sizes">Size</label>
              <select id="sizes">
                <option value="">
                  {product.colors ? product.colors[0].sizes[0].size : ""}
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
              </select>
              <label htmlFor="quantity1">Quantity</label>
              <input
                type="number"
                id="quantity1"
                name="quantity"
                placeholder={
                  product.colors ? product.colors[0].sizes[0].quantity : ""
                }
              />
            </div>
          </Colors>

          <button type="submit">Submit</button>
          <button type="button" onClick={() => setPatchProduct(false)}>
            Cancel
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default PatchProduct;
