import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSlider = styled(Slider)`
  padding: 10px;
  background-color: #F2F2F2;

  .slick-arrow.slick-prev {
    left: 12px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #fff;
    }
  }

  .slick-arrow.slick-next {
    right: 28px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #fff;
    }
  }

  .slick-dots {
    margin-top: 10px;
    z-index: 10;
    bottom: -2px !important;
    li {
      button {
        &::before {
        }
      }
      &.active {
        button {
          &::before {
            color: #fff;
          }
        }
      }
    }
  }
`;

