import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 7.25rem 6.5rem;

  @media (max-width: 64em) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 1.5rem;
  }
`;
export const SettingsWrapper = styled.div`
  flex: 6;
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
export const ImageIcon = styled.div``;

export const Avatar = styled.img`
  border: 1px solid #ccc;
  border-radius: 50%;
  object-fit: cover;
  height: 4rem;
  width: 4rem;
`;
export const DeleteAccount = styled.span`
  color: #c20303;
  cursor: pointer;
`;
