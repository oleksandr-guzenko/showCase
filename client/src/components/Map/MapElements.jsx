import styled from "styled-components";

export const MapFrame = styled.iframe`
  width: 100%;

  @media screen and (max-width: 576px) {
    height: 15rem;
  }

  @media screen and (min-width: 576px) {
    height: 20rem;
  }

  @media screen and (min-width: 768px) {
    height: 25rem;
  }
`;
