import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 7.25rem;
  justify-content: center;
  align-items: center;
`;
export const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;
export const InputandTextArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 35px;
`;
export const Input = styled.input`
  background: #f1f1f1;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  padding: 1.375rem 0.938rem;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background: #f1f1f1;
  border-radius: 0.5rem;
  border: none;
  padding: 1.375rem 0.938rem;

  min-height: 20rem;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  border-radius: 0.5rem;
  border: 1px solid #d0d5dd;
  background: white;
  padding: 0.75rem 0.875rem;
  text-align: center;
  width: 7.5rem;
  &:hover {
    background: #f1f1f1;
  }
`;

export const LabelandRemove = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.438rem;
`;

export const Remove = styled.button`
  border: none;
  outline: none;
  background: none;
  color: #c20303;
`;
