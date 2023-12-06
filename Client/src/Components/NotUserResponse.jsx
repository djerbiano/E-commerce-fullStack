import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f2f2f2;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    button {
      padding: 10px;
      background-color: hsl(226.32deg 52.29% 21.37%);
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0069d9;
      }
    }
  }
`;

function NotUserResponse() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch(
      `${process.env.REACT_APP_URL_SERVER}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (data.length >= 3) {
      localStorage.setItem("token", data[2].token);
      localStorage.setItem("userId", data[1]._id);
      localStorage.setItem("email", data[1].email);
      localStorage.setItem("name", data[1].name);
      localStorage.setItem("lastName", data[1].lastName);
      localStorage.setItem("phone", data[1].phone);
      localStorage.setItem("address", data[1].address);

      window.location.reload();
    } else {
      alert(data.message);
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" />

          <label htmlFor="password">Mot de passe: </label>
          <input type="password" id="password" />

          <button type="submit">Se connecter</button>
        </form>
        <p>Vous n'avez pas de compte ?</p>

        <p>Mot de passe oublie ?</p>
      </Content>
    </Container>
  );
}

export default NotUserResponse;
