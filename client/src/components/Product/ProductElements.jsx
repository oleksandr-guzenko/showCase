import styled from "styled-components";
import EllipsisText from "react-ellipsis-text";
import { ImageOverlay } from "react-image-overlay-effect";
import { FaEye } from "react-icons/fa";

export const ProductContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 20px 10px -15px rgb(10 4 60 / 20%);

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ProductImage = styled(ImageOverlay)`
  width: 100%;

  @media screen and (max-width: 576px) {
    height: 13.125rem;
  }

  @media screen and (min-width: 576px) {
    height: 15rem;
  }

  @media screen and (min-width: 768px) {
    height: 15rem;
  }

  @media screen and (min-width: 992px) {
    height: 17rem;
  }

  @media screen and (min-width: 1200px) {
    height: 15rem;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

export const ProductInfoCol_1 = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 1rem;
  }
`;

export const ProductInfoCol_2 = styled.div``;

export const ProductTitle = styled(EllipsisText)`
  display: block;
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.25rem;
`;

export const ProductContributor = styled(EllipsisText)`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;

export const ProductGeneration = styled.div`
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  white-space: nowrap;
  padding: 8px 15px;
  background: #ffcb91;
  border-radius: 5px;
  box-shadow: 0px 12px 20px -11px rgb(10 4 60 / 20%);

  @media screen and (max-width: 360px) {
    margin-top: 0.5rem;
  }
`;

export const ProductViewIcon = styled(FaEye)`
  background: #5e6efe;
  padding: 1rem;
  font-size: 4rem;
  color: white;
  border-radius: 50%;
  transition: all 0.8s;

  &:hover {
    background: #0a043c;
  }
`;
