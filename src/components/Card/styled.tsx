import styled from "styled-components";

export const CardContainer = styled.div`
  width: 1024px;
  position: relative;
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
  max-width: inherit;
  grid-column: 2 / -2;
`;

export const CardItem = styled.article`
  border: 1.5px solid rgb(229, 229, 229);
  border-radius: 24px;
  display: flex;
  overflow: hidden;
  margin-bottom: 2rem;
  width: 100%;
`;

export const CardImage = styled.img`
  border-radius: 24px 0px 0px 24px;
  width: 50%;
  height: auto;
  z-index: 5;
  background-color: rgb(255, 255, 255);
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

export const CardDetails = styled.div`
  padding: 8px 12px;
`;

export const CardDetailTitleDescription = styled.span`
  font-size: 12px;
  color: grey;
`;
export const CardDetailTitle = styled.h4`
  color: black;
  line-height: 1;
  font-size: 1.25rem;
  font-weight: 100;
  margin: 8px 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardContentDetail = styled.div`
  font-size: 12px;
  margin: 0;
  > ul {
    padding: 0;
    > li {
      list-style-type: none;
      padding: 5px;
    }
  }
`;

export const CardContentPrices = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPriceDiscount = styled.div`
  border-radius: 25px;
  text-align: center;
  background: #f5f52a;
  height: auto;
  padding: 0.5em;
  margin-bottom: 5px;
`;

export const CardPriceSubtitle = styled.p`
  font-size: 12px;
  color: lightgrey;
  margin: 5px;
`;

export const CardPriceTotal = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.25;
  margin: 5px;
`;

export const CardContainerButton = styled.div`
  position: absolute;
  right: 0;
  margin-right: 31px;
`;

export const CardButtonTrip = styled.button`
  border-radius: 25px;
  color: white;
  background-color: black;
  border: none;
  padding: 1.2em 0.9em;
`;

export const CardContentAlias = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const CardAlias = styled.div`
  border: 1.5px solid rgb(229, 229, 229);
  border-radius: 25px;
  padding: 0 10px;
  margin: 4px;
`;
