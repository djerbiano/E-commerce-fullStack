import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from './Pages/Home';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Analytics />
      </AppContainer>
    </BrowserRouter>
   
  );
}

export default App;
