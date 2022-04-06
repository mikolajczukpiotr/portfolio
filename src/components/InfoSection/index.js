import React from "react";
import {
  Column1,
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  TextWrapper,
} from "./InfoElements";
import { Heading, InfoWrapper, Subtitle, TopLine } from "../AllComponentsStyle";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  img,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
