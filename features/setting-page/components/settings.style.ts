import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.25rem 0;
`;
export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const ImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;

  & > ${Label} {
    border: 1px solid #d0d5dd;
    text-align: center;
    font-weight: 600;
    font-size: 0.875rem
    outline: none;
    background: white;
    border-radius: 0.5rem;
    padding: 0.75rem 0.875rem;

    &:hover {
        background:  #eeeeee;
      }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  background: #eeeeee;
  border-radius: 0.5rem;
  border: none;

  &:focus {
    outline: 1px solid #777;
  }
`;
export const ImageIcon = styled.img`
  border-radius: 50%;
  background: #777;
  width: 50px;
  height: 50px;
`;
export const DeleteAccount = styled.span`
  color: #c20303;
  cursor: pointer;
`;
