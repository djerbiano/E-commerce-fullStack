import styled from "styled-components";
import { GrFavorite } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  position: relative;

  div {
    min-width: 100%;
    min-height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 70%;
    aspect-ratio: 1;
    object-fit: contain;
    cursor: pointer;
  }
  & > :last-child {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      scale: 1.2;
      transition: all 0.2s;

      & > * {
        fill: #fa5;
      }
    }
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
    height: 30px;
    
  }
`;

function TopVente({ productTopVent }) {
  const navigate = useNavigate();
  const Product =
    productTopVent && productTopVent.length > 0 ? productTopVent[0] : null;
  return (
    <Container onClick={() => {
      navigate(`/singleProduct/${Product._id}`);
    }}>
      <div>
        <img
          src={
            Product &&
            `${process.env.REACT_APP_URL_SERVER}/images/${Product.pictures.pic1}`
          }
          alt={Product && Product.title}
        />
      </div>
      <h3>{Product && Product.title}</h3>
      <h4>{Product && Product.regularPrice} $</h4>
      <GrFavorite title="Ajouter aux favoris" />
    </Container>
  );
}

export default TopVente;
