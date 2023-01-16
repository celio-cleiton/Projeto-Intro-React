import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RegisterButton = styled.button`
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
  padding: 10px;
  :hover {
    background-color: black;
    color: white;
  }
`;

