import styled, { css } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  margin-top: 45px;
  width: 660px;
  background: #f6f6f6;
  padding: 20px;
  height: max-content;
  border-radius: 8px;
  box-shadow: -1px 2px 5px grey;

  strong {
    color: #333;
    font-size: 24px;
  }

  input {
    padding: 13px 10px;
    width: 100%;
    border: 0;
    box-shadow: -1px 1px 5px grey;
    border-radius: 8px;
    margin-top: 20px;
  }

  div {
    display: flex;
    margin-top: 5px;

    div {
      & + div {
        margin-left: 10px;
      }
    }
  }

  button[type="submit"] {
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

export const NumberedButton = styled.button`
  border: 0;
  padding: 20px;
  background: #4cafe7;
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#4cafe7")};
  }

  ${(props) =>
    props.radius === "right" &&
    css`
      border-radius: 0px 5px 5px 0px;
      border-left: 1px solid #fff;
    `}

  ${(props) =>
    props.radius === "left" &&
    css`
      border-radius: 5px 0px 0px 5px;
    `}

  ${(props) =>
    props.radius === "all" &&
    css`
      border-radius: 5px 5px 5px 5px;
    `}

  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};

      &:hover {
        background: ${shade(0.2, props.bgColor)};
      }
    `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 15px 0;
  width: 100%;
  border: 0;
  border-radius: 5px;
  color: #fff;
  transition: background-color 0.2s;
  background-color: #4cafe7;

  &:hover {
    background: ${shade(0.2, "#4cafe7")};
  }

  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
      &:hover {
        background-color: ${shade(0.3, props.bgColor)};
      }
    `}

  &:nth-child(1) {
    margin-top: 40px;
  }

  & + button {
    margin-top: 15px;
  }
`;
