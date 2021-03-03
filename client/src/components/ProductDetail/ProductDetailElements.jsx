import styled from "styled-components";
import ModalImage from "react-modal-image";
import { FaUserCircle } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import ShowMoreText from "react-show-more-text";
import HashLoader from "react-spinners/HashLoader";

export const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    padding: 3.125rem 1.25rem;
  }
  @media only screen and (min-width: 576px) {
    flex-direction: column;
    padding: 3.125rem 2rem;
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const BigImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: max-content;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 20px 10px -15px rgb(10 4 60 / 20%);

  @media only screen and (max-width: 576px) {
    padding: 0.5rem;
  }

  @media only screen and (min-width: 576px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    margin-right: 2rem;
  }
`;

export const ProductInformationContainer = styled.div`
  height: max-content;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BigImage = styled(ModalImage)`
  width: 100%;

  &:first-child {
    border-radius: 1rem;
  }

  @media only screen and (max-width: 576px) {
    height: 10rem;
  }
  @media only screen and (min-width: 576px) {
    height: 20rem;
  }
  @media only screen and (min-width: 768px) {
    height: 25rem;
  }
`;

export const ProductInfoContainer = styled.div`
  padding: 1.5rem;
  width: 30rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 20px 10px -15px rgb(10 4 60 / 20%);

  @media screen and (max-width: 992px) {
    margin: 1.5rem 0rem;
    width: 100%;
  }

  @media screen and (max-width: 360px) {
    padding: 1rem;
  }
`;

export const ProductAuthorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 20px 10px -15px rgb(10 4 60 / 20%);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductInfoTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 2rem;

  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const ProductInfoDesc = styled(ShowMoreText)`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  text-align: justify;
`;

export const ProductInfoReportDownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInfoReportDownload = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  width: 100%;
  background: #0a043c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  box-shadow: 0px 12px 20px -11px rgb(10 4 60 / 60%);

  &:hover {
    background: #5e6efe;
  }
`;

export const ProductInfoReportDownloadIcon = styled(HiDownload)`
  margin-right: 0.2rem;
  font-size: 1.3rem;
`;

export const ProductAuthorName = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  display: block;

  @media screen and (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const ProductAuthorGeneration = styled.span`
  display: block;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;

  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

export const ProductAuthorImage = styled(FaUserCircle)`
  margin-right: 1rem;
  font-size: 4rem;
`;

export const LoaderContainer = styled.div`
  display: ${({ loading }) => (!loading ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 35vh;
  margin: 6rem 0;
`;

export const Loader = styled(HashLoader)``;

export const LoaderText = styled.span`
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2rem;
`;
