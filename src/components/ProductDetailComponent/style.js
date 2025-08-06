import styled from "styled-components";
import { Col, InputNumber } from "antd";

export const WrapperStyleSmallImage = styled.img`
    height:100px;
    width:100px;

`
export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`
export const WrapperStyledNameProduct = styled.div`
    font-size: 24px;
    font-weight: bold;
`
export const WrapperStyledTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`
export const WrapperPriceProduct = styled.div`
    background-color: rgb(250, 250, 250);
    border-radius: 4px;
`
export const WrapperTextPriceProduct = styled.div`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`
export const WrapperAddressProduct = styled.div`
    span.address-product {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    span.change-address {
        color: rgb(0, 112, 240);
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        font-style: 0;
    }
`

export const WrapperQualityProduct = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgb(87, 87, 87);
  width: fit-content;
  overflow: hidden;
`
export const WrapperBtnQualityProduct = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f0f0f0;
  }
`
export const WrapperInputNumber = styled(InputNumber)`
  width: 50px !important;
  border: none !important;
  .ant-input-number-input {
    text-align: center;
    border: none;
  }
  .ant-input-number-handler-wrap {
    display: none;
  }
    &.ant-input-number-handler-wrap {
      display: none !important;
    }
`
