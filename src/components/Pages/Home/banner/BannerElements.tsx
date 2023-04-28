import styled, {keyframes} from "styled-components";
import SVG from "react-inlinesvg";
import BannerImage from "../img/banner.svg";

const AnimeShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const BannerBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
`;
export const BannerContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  background: #fff;
  margin-top: 20px;
  border-radius: 8px;
  
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  animation-name: ${AnimeShow};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  
  @media screen and (max-width: 768px)
  {
    grid-template-columns: 1fr;
  }
`;

export const BannerText = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
`;

const StyledSVG = styled(SVG)`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  
  @media screen and (max-width: 768px)
  {
    display: none;
  }
`;

export const BannerSVG = () => {
    return <StyledSVG src={BannerImage} />
}


export const BankTitle = styled.span`
  display: grid;
  align-items: end;
  text-align: center;
  font-family: 'Playfair Display', serif;
  letter-spacing: .02em;
  font-weight: 400;
  color: #4677cf;
  font-size: 36px;
`;



export const BankDesc = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 50px;
  font-size: 18px;
`;

export const ReadMoreBtn = styled.button`
  outline: none;
  border: none;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  color: #fff;
  border-radius: 40px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  background: linear-gradient(to right, #7dd0ff, #68a6ff);
`;