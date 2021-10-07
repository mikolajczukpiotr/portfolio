import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  width: 80%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;
export const TopLine = styled.p`
  color: #87c2e9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? "#010606" : "#fff")};
`;
