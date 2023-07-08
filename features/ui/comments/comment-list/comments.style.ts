import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #bdbdbd;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 80%;
  padding: 1rem;
`;
export const TextAreaComment = styled.textarea`
  outline: none;
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
  padding: 0.75rem 0.875rem;
`;
export const ArrayComments = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  border-radius: 0.3rem;
`;
export const ContainerComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
`;
export const ImageUserText = styled.div`
  display: flex;
  gap: 1rem;
`;
export const UserAndText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;
export const User = styled.h4`
  margin: 0;
`;

export const Time = styled.span`
  color: #b1b1b1;
  font-size: 12px;
`;
export const Avatar = styled.img`
  width: 45;
  height: 45px;
`;
