import { AuthProvider } from "./Context/AuthContext";
import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuHambContext } from "./Context/MenuHambContext";
import styled from "styled-components";
import Headers from "./Containers/Headers";
import Footer from "./Containers/Footer";
import Main from "./Containers/Main";
import FilterProducts from "./Containers/FilterProducts";
import SingleProduct from "./Containers/SingleProduct";
import MyProfile from "./Containers/MyProfile";
import MesCommandes from "./Containers/MesCommandes";
import Reclamations from "./Containers/Reclamations";
import NousContacter from "./Components/NousContacter";
import PanierContent from "./Containers/PanierContent";
import NotFound404 from "./Components/NotFound404";
import FavoContent from "./Components/FavoContent";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

function App() {
  const [open, setOpen] = useState(false);
  const handleStorageChange = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("lastName");
    localStorage.removeItem("phone");
    localStorage.removeItem("address");
    window.location.href = "/";
  };
  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuHambContext.Provider value={{ open, setOpen }}>
          <AppContainer>
            <Headers />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/produits" element={<FilterProducts />} />
              <Route path="/singleProduct" element={<SingleProduct />} />
              <Route path="/monProfile" element={<MyProfile />} />
              <Route path="/mesCommandes" element={<MesCommandes />} />
              <Route path="/réclamations" element={<Reclamations />} />
              <Route path="/nousContacter" element={<NousContacter />} />
              <Route path="/panier" element={<PanierContent />} />
              <Route path="/favoris" element={<FavoContent />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
            <Footer />
            <Analytics />
          </AppContainer>
        </MenuHambContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
