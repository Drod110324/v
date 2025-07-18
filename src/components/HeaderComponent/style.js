import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 16px;
  flex-wrap: nowrap;
`
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
`
export const WrapperTextHeader = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`