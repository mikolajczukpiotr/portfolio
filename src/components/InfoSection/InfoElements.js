import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  } ;
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 60%;
  margin: 10px;
  padding-right: 0;
  border-radius: 50%;
  -webkit-box-shadow: 0px 7px 44px -11px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 7px 44px -11px rgba(0, 0, 0, 1);
  box-shadow: 0px 7px 44px -11px rgba(0, 0, 0, 1);

  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;
