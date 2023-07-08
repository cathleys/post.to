import styled from "styled-components";

export const Container = styled.div`
  padding: 7.25rem 0;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 1.5rem;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Input = styled.input`
  background: #eeeeee;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;

  &:focus {
    outline: 1px solid #777;
  }
`;

export const Anchor = styled.a`
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;

export const LoginButton = styled.button`
  background: #007aff;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
  width: 100%;

  &:hover,
  &:active {
    background: #0063e4;
    box-shadow: 0px 18px 30px -20px rgba(0, 0, 0, 0.75);
  }
`;
