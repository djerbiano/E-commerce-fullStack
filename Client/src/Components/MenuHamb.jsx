import { useState } from "react";
import styled from "styled-components";
import { RiMenu3Line } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MenuIcon = styled.div`
  position: relative;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 90vh;
  background: linear-gradient(0deg, #fa5, #7d9fffe3);
  list-style: none;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease-in-out;
  padding: 20px;

  li {
    display: ${({ open }) => (open ? "block" : "none")};
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease;
    padding: 20px;
    border-radius: 10px;

    &:hover {
      transition: 0.3s ease;
      transform: scale(1.1);
      border-bottom: 2px solid;
    }

    @media (max-width: 500px) {
      font-size: 8vw;
      transition: 0.3s ease;
    }
  }
`;

function MenuHamb() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <MenuIcon>
        <RiMenu3Line onClick={() => setOpen(!open)} />
      </MenuIcon>

      <MenuContent open={open}>
        <li>Search</li>
        <li>Compte</li>
        <li>Favoris</li>
        <li>Panier</li>
        <li>Contact</li>
      </MenuContent>
    </Container>
  );
}

export default MenuHamb;
