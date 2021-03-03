import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";

export const ProductsContainer = styled.div`
  display: grid;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    grid-gap: 2rem;
    grid-template-columns: auto;
    padding: 3.125rem 1.25rem;
  }

  @media screen and (min-width: 576px) {
    grid-gap: 2rem;
    grid-template-columns: auto;
    padding: 3.125rem 2rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
`;

export const LoadmoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.125rem;
`;

export const LoadmoreButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  background: #0a043c;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.3s ease-in;
  outline: none;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.7);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;

  &:hover {
    background: #5e6efe;
  }
`;

export const LoaderContainer = styled.div`
  display: ${({ loading }) => (!loading ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 35vh;
  margin: 0 0 5rem 0;
`;

export const Loader = styled(HashLoader)``;

export const LoaderText = styled.span`
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2rem;
`;
