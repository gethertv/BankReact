import styled, {keyframes} from "styled-components";

export const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  background: #262626;
  color: #fff;
  
`;

export const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  
  grid-template-columns: 1fr 1fr;
`;

export const FooterSocial = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
  
`;

export const FooterAbout = styled.div`
  display: grid;
  text-align: right;
  margin-right: 20px;
`;

export const FooterIcon = styled.span`
  font-size: 28px;
  margin-top: 8px;
`;
export const SocialInfo = styled.div`
  display: grid;
  width: 100%;
  justify-items: left;
  align-items: center;
  font-size: 18px;
`;