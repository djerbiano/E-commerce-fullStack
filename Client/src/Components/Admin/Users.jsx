import styled from "styled-components";
import SearchBar from "./UsersComponents/SearchBar";
import OneUser from "./UsersComponents/OneUser";
import Pagination from "./DashboardComponent/Pagination";

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

function Users() {
  const allDiv = document.querySelectorAll("div");

  allDiv.forEach((div) => {
    div.addEventListener("click", () => {
      window.location.href = "/admin/users/oneUser";
    });
  });
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
        <Div1>
          <OneUser />
        </Div1>
        <Div2>
          <OneUser />
        </Div2>
        <Div1>
          <OneUser />
        </Div1>
        <Div2>
          <OneUser />
        </Div2>
        <Div1>
          <OneUser />
        </Div1>
        <Div2>
          <OneUser />
        </Div2>
        <Div1>
          <OneUser />
        </Div1>
        <Div2>
          <OneUser />
        </Div2>
        <Div1>
          <OneUser />
        </Div1>
        <Div2>
          <OneUser />
        </Div2>
      </Content>
      <Pagination />
    </Container>
  );
}

export default Users;
