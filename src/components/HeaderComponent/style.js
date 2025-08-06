import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 16px;
  flex-wrap: nowrap;
`;
export const WrapperHeaderLogo = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: left;
  font-family: 'Roboto', sans-serif;
`
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: transparent;
  color: #fff;
  padding: 6px 16px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(255,255,255,0.08);
  }
`;

export const WrapperHeaderCart = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  color: #333;
  padding: 6px 16px;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f0f0f0;
  }
`;
export const WrapperTextHeader = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`