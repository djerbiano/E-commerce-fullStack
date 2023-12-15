import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../Admin/Dashboard";
import Users from "../Admin/Users";
import Products from "../Admin/Products";
import Stocks from "../Admin/Stocks";
import Trackings from "../Admin/Trackings";
import Orders from "../Admin/Orders";
import Ratings from "../Admin/Ratings";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function MainAdmin() {
  const [component, setComponent] = useState(null);
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    switch (path) {
      case "/admin/dashboard":
        setComponent(<Dashboard />);
        break;
      case "/admin/users":
        setComponent(<Users />);
        break;
      case "/admin/products":
        setComponent(<Products />);
        break;
      case "/admin/stocks":
        setComponent(<Stocks />);
        break;
      case "/admin/trackings":
        setComponent(<Trackings />);
        break;
      case "/admin/orders":
        setComponent(<Orders />);
        break;
      case "/admin/ratings":
        setComponent(<Ratings />);
        break;
      default:
        setComponent(<Dashboard />);
        break;
    }
  }, [path]);
  return <Container>{component}</Container>;
}

export default MainAdmin;
