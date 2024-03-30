import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  top: 120px;
  display: grid;
  grid-auto-rows: min-content;
  column-gap: 16px;
  grid-template-columns: 0px 1fr 0px;
  @media (min-width) {
    column-gap: 64px;
    grid-template-columns: 0px 1fr 0px;
  }
`;

export const CardSection = styled.section`
  padding: 52px 0px;
  max-width: inherit;
  grid-column: 2 / -2;
`;

export const CardItem = styled.article`
  border: 1.5px solid rgb(229, 229, 229);
  max-width: auto;
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  margin-bottom: 2rem;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

export const CardTitle = styled.h2`
  display: flex;
  margin-top: 0px;
  margin-bottom: 24px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5;
  text-align: center;
`;

export const CardImage = styled.img`
  height: 100%;
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50%;
  height: 100%;
  z-index: 5;
  background-color: rgb(255, 255, 255);
`;

export const CardDetails = styled.div`
  position: absolute;
  right: 0;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardDetailTitleDescription = styled.span`
  font-size: 12px;
  color: grey;
`;
export const CardDetailTitle = styled.h2`
  color: black;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardContentDetail = styled.p`
  font-size: 12px;
  padding: 24px 12px;
`;
