import styled from "styled-components";

export const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  borderRadius: "0.3rem",
  boxShadow: 24,
  outline: "none",
  p: 4,
};
export const SearchBox = styled.div<{ mode: string }>`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background: ${(props) => (props.mode === "dark" ? "#1a202c" : "white")};
  color: ${(props) => (props.mode === "dark" ? "white" : "#000")};
  border-radius: 0.3rem;
  boxshadow: 24;
  outline: none;
  padding: 3rem;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  background: url(/icons/search.svg) no-repeat right center;
  width: 100%;
  margin: auto;
  padding: 1rem 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
`;
export const SearchResultsWrapper = styled.div`
  margin: 1rem auto;
`;
export const TitleAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h4`
  margin: 0.5rem 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    color: #e74c3c;
  }
`;
export const Desc = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
