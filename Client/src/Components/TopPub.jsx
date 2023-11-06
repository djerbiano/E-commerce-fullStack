import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://img.freepik.com/photos-premium/portrait-homme-debout-bras-croises-contre-image-defocalisee-arbres-poussant-au-parc_1134-4355.jpg?size=626&ext=jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 50vh;

`;

function TopPub() {
  return <Container></Container>;
}

export default TopPub;
