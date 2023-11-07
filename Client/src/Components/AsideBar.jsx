import styled from "styled-components";
import { BiCategory } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { GiVibratingSmartphone } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;

  & li {
    list-style: none;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;
      font-weight: bold;
      transition: 0.3s;
    }

    @media (max-width: 930px) {
    gap: 0px;
    padding: 5px;
  }
  }

  @media (max-width: 930px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    font-weight: bold;
    padding: 0;
    width:auto;
  }

  @media (max-width: 700px) {
  display:none;
  }
`;

function AsideBar() {
  return (
    <Container>
      <li>
        <BiCategory />
        Catégories
      </li>
      <li>
        <AiFillHome />
        Home
      </li>
      <li>
        <GiClothes />
        Vêtements
      </li>
      <li>
        <FaComputer /> Informatique
      </li>
      <li>
        <MdOutlinePersonalVideo /> Tv - Son
      </li>
      <li>
        <GiVibratingSmartphone /> Téléphonie
      </li>
      <li>
        <BsSmartwatch /> Objets connectés
      </li>
    </Container>
  );
}

export default AsideBar;
