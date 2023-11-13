import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Headers from "./Containers/Headers";
import Footer from "./Containers/Footer";
import Main from "./Containers/Main";
import FilterProducts from "./Containers/FilterProducts";
import SingleProduct from "./Containers/SingleProduct";
import { MenuHambContext } from "./Context/MenuHambContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <MenuHambContext.Provider value={{ open, setOpen }}>
        <AppContainer>
          <Headers />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/produits" element={<FilterProducts />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
          </Routes>
          <Footer />
          <Analytics />
        </AppContainer>
      </MenuHambContext.Provider>
    </BrowserRouter>
  );
}

export default App;
