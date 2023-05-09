import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const TitleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 5rem;
  max-width: 1000px;

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 5rem;

  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2rem;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const VideoUrl = styled.video`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border: 2px solid white;
`;

export const Span = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: blue;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  width: 90%;
  margin:0 auto;
  text-align: center;
  margin-top: 2rem;
  font-weight: 800;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;


export const SpanBold = styled.span`
 font-family: ${({ theme }) => theme.fonts.montserrat};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 900;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 2rem;
  }

`
