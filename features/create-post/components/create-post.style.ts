import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 7.25rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    padding: 3rem 1rem;
  }
`;

export const ImagePost = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
  height: 250px;
  width: 100vw;
  margin-bottom: 1rem;
`;

export const PostForm = styled.form`
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
  gap: 2rem;
`;
export const Input = styled.input`
  border: 1px solid #dadada;
  border-radius: 0.5rem;
  padding: 1rem 0.938rem;

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #dadada;
  border-radius: 0.5rem;
  padding: 1rem 0.938rem;
  height: 250px;
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
  font-weight: 600;
  width: 7.5rem;

  &:hover {
    background: #f1f1f1;
  }
`;

export const ImageArea = styled.div`
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

export const ButtonWrapper = styled.div`
  display: flex;
`;
