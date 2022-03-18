import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 3px solid #1976d2;
  border-radius: 20px;

  button {
    border-radius: 0 0 10px 10px;
    background-color: #1976d2;
  }

  img {
    margin-top: 30px;
    max-height: 260px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.2px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    height: 100%;
  }
`;
