import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: #27408B;
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
`