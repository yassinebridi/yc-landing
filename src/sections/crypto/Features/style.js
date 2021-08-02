import styled from "styled-components/macro"
import arrowImage from "../../../assets/image/landing-5/arrow-long.png"

export const SingleFeature = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:after {
    position: absolute;
    content: "";
    background: url(${arrowImage}) no-repeat;
    top: 50%;
    right: -58%;
    transform: translate(-50%, -50%);
    height: 35px;
    width: 107px;
    display: none;

    @media (min-width: 992px) {
      display: block;
      right: -68%;
    }

    @media (min-width: 1200px) {
      right: -58%;
    }
  }
`
