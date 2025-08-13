import styled from "styled-components";

export const WrapperNavBar = styled.div`
  background: #fff;
  width: 200px;
  min-height: 100vh;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
`;

export const WrapperLabelText = styled.h4`
  color: rgb(56, 56, 61);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const WrapperTextValue = styled.span`
    color: rgb(56, 56, 61);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      color: #1890ff;
    }
`;
export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
`;

export const WrapperTextPrice = styled.div`
    padding: 4px;
    color: rgb(56, 56, 61);
    border-radius: 10px;
    background-color: #e0e0e0;
    width: fit-content;
    cursor: pointer;
    &:hover {
      background-color: #d0d0d0;
    }
`;