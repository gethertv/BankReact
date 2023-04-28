import styled from "styled-components";
import SVG from "react-inlinesvg";
import InvestingImg from "../img/investing.svg";

export const ExchangeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
`;
export const ExchangeContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  
  grid-template-columns: 1fr 1fr;
`;

export const ExchangeTable = styled.table`
  background: #ffffff;
  border-radius: 8px;
  border-collapse: separate;
  padding: 20px;
  
  border-spacing: 0 4px;
`;

export const ExchangeTHead = styled.thead`
    
`;
export const ExchangeTr = styled.tr`
  border-bottom: 2px solid #ccc;
  padding-bottom: 15px;
`;

export const ExchangeTh = styled.th`
  border-bottom: 2px solid #ccc;
  padding-bottom: 15px;
`;

export const ExchangeDataTr = styled.tr`

`;

export const ExchangeDataTh = styled.th`
  font-weight: 400;
  background: ${({ isEven } : {isEven: any}) => (isEven ? 'none' : '#f2f4fd')};
  padding: 5px;
`;
export const ExchangeTBody = styled.tbody`
`;

export const ExchangeInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
`;

const StyledSVG = styled(SVG)`
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  background: none;
  
  @media screen and (max-width: 768px)
  {
    display: none;
  }
`;


export const ImageInvesting = () => {
    return <StyledSVG src={InvestingImg} />
}

export const TextInvesting = styled.div`
  display: grid;
  text-align: center;
  font-size: 28px;
  font-family: "Playfair Display", serif;
  align-items: end;
`;