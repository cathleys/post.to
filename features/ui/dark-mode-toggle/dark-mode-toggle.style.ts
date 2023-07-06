import styled from "styled-components";

export const Container = styled.div`
  width: 42px;
  height: 24px;
  border: 1.5px solid #ea9c28;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  position: relative;
  cursor: pointer;
`;

export const Icon = styled.div`
  font-size: 12px;
`;

export const Ball = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ea9c28;
  border-radius: 50%;
  position: absolute;
`;
