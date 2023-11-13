import styled from "styled-components";
import Logo from "../Assets/18830882_1200_B.jpg";

const SingleProduct = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s;
  }
  & > img {
    width: 100%;
    object-fit: contain;

    border-radius: 10px;
  }
`;

function Product() {
  return (
    <SingleProduct onClick={() => window.location.href = "/singleProduct"}>
      <img src={Logo} alt="" />
      <h2>CHEMISE AJUSTEE</h2>
      <h4>200 $</h4>
    </SingleProduct>
  );
}

export default Product;
