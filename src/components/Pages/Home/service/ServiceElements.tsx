import styled, {keyframes} from "styled-components";


const AnimeShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


export const ServiceBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  background: #fff;
  margin-top: 20px;
  opacity: 0;
  
  animation-delay: 1s;
  animation-name: ${AnimeShow};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const ServiceContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const ServiceBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;

  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 1fr;
  background: #f4f6ff;

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

export const ProductImg = styled.img`
  width: 80%;
  margin: 10% 10% 0 10%;
`;

export const ProductDesc = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  font-size: 18px;
`;
