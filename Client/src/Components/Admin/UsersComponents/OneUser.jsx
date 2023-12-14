import styled from "styled-components";

const OneUserr = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  padding: 10px;

  div {
    width: 16.66%;
  }
`;

function OneUser() {
  return (
    <OneUserr>
      <div>
        <p>Eric</p>
      </div>
      <div>
        <p>DUPOND</p>
      </div>
      <div>
        <p>0033 00 00 00 00</p>
      </div>
      <div>
        <p> erickd@gmail</p>
      </div>
      <div>
        <p>1 rue de test 75000 PARIS </p>
      </div>
      <div>
        <p>Oui</p>
      </div>
    </OneUserr>
  );
}

export default OneUser;
