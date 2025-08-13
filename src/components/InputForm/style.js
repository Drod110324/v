import styled from "styled-components";
import { Input } from "antd";

export const WrapperInputStyle = styled(Input)`
  font-size: 18px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  &::placeholder {
    font-size: 18px;
    color: #999;
  }
`;