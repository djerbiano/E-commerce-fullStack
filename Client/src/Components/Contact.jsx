import styled from "styled-components";
import { MdHeadsetMic } from "react-icons/md";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

function Contact() {
  return (
    <Container>
      <MdHeadsetMic />
    </Container>
  );
}

export default Contact;
