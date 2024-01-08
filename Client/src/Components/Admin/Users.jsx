import styled from "styled-components";
import SearchBar from "./UsersComponents/SearchBar";
import OneUser from "./UsersComponents/OneUser";
import Pagination from "./DashboardComponent/Pagination";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  & > :last-child {
    position: absolute;
    top: 105% !important;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Div1 = styled.div`
  background-color: white;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  & > * {
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &:hover {
    background-color: hsl(226.32deg 52.29% 21.37%);
    color: white;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;
//eslint-disable-next-line
const Div2 = styled.div`
  background-color: #f0f0f0;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  & > * {
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &:hover {
    background-color: hsl(226.32deg 52.29% 21.37%);
    color: white;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;

  padding: 20px;
  background-color: #f0f0f0;

  p {
    width: 16.66%;
    text-align: center;
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_URL_SERVER}/api/users/allUsers`, {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setUsers(data);
          } else {
            setError(data.message || "Aucun user");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <SearchBar />
      <Content>
        <Header>
          <p>Name</p>
          <p>LastName</p>
          <p>Phone</p>
          <p>Email</p>
          <p>Adress</p>
          <p>Validate email</p>
        </Header>

        {users ? (
          users.map((user) => {
            return (
              <LinkItem to={`/admin/users/oneuser/${user.email}`} key={user._id}>
                <Div1 className="kj">
                  <OneUser user={user} />
                </Div1>
              </LinkItem>
            );
          })
        ) : (
          <div>{error}</div>
        )}
      </Content>
      <Pagination />
    </Container>
  );
}

export default Users;
