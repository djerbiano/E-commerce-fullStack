import styled from "styled-components";
import AsideMyProfile from "../Components/AsideMyProfile";
import SetReclamations from "../Components/SetReclamation";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

const Aside = styled.div`
  height: 100%;

  & > * {
    & > :nth-child(4) {
      background-color: #60c660b3;
      border-radius: 5px;

      &:hover {
        background-color: #60c660b3;
      }
    }
  }
`;
const Content = styled.div`
  min-width: 500px;
  height: 100%;
  margin-left: 50px;
`;

function MyProfile() {
  return (
    <Container>
      <Aside>
        <AsideMyProfile />
      </Aside>
      <Content>
        <SetReclamations />
      </Content>
    </Container>
  );
}

export default MyProfile;