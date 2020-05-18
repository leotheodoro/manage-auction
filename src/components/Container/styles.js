import styled, { css } from "styled-components";
import { shade } from "polished";

export const Background = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chroma = styled.div`
  background: #00b140;
  height: 100vh;
  max-width: 50vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

  h1 {
    margin-top: 40px;
    font-size: 72px;
  }

  h2 {
    font-size: 30px;
    letter-spacing: 1px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 50vw;
  width: 100%;
  overflow: auto;
`;

export const FormCard = styled.div`
  margin-top: 45px;
  width: 660px;
  background: #f6f6f6;
  padding: 20px;
  height: max-content;
  border-radius: 8px;
  box-shadow: -1px 2px 5px grey;

  input {
    padding: 13px 10px;
    width: 100%;
    border: 0;
    box-shadow: -1px 1px 5px grey;
    border-radius: 8px;

    & + input {
      margin-top: 15px;
    }
  }

  button {
    margin-top: 40px;
    padding: 15px 0;
    width: 100%;
    border: 0;
    background-color: #4cafe7;
    border-radius: 5px;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#4cafe7")};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 15px 0;
  width: 100%;
  border: 0;
  border-radius: 5px;
  color: #fff;
  transition: background-color 0.2s;
  background-color: #4cafe7;

  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
      &:hover {
        background: ${shade(0.2, props.bgColor)};
      }
    `}

  &:hover {
    background: ${shade(0.2, "#4cafe7")};
  }

  &:nth-child(1) {
    margin-top: 40px;
  }

  & + button {
    margin-top: 15px;
  }
`;
