import styled from "styled-components";
import ReactQuill from "react-quill";

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
  gap: 3.125rem;
  width: 100%;
`;
export const InputandTextArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3.125rem;
`;
export const Input = styled.input`
  border: 1px solid #dadada;
  border-radius: 0.5rem;
  padding: 1rem 0.938rem;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled(ReactQuill)`
  height: 20rem;
  margin-bottom: 3rem;
`;

export const Label = styled.label`
  border-radius: 0.5rem;
  border: 1px solid #d0d5dd;
  background: white;
  padding: 0.75rem 0.875rem;
  text-align: center;
  font-weight: 600;
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
