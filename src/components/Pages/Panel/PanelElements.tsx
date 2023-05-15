import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {FaCircle, FaPager, FaTimes, FaTransgender} from "react-icons/fa";
import {TbSettings} from "react-icons/tb";
import {BiTransfer} from "react-icons/bi";
import {TbBrandMixpanel} from "react-icons/tb";

export const PanelBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const PanelContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: grid;
  gap: 40px;
  grid-template-columns: 2fr 7fr;
`;

export const MenuLeft = styled.div`
  float:left;
  width: 100%;
  color: #000;
`;

export const BalanceTitle = styled.div`
  float: left;
  width: 100%;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 14px;
  padding: 10px;
`;

export const BalanceValue = styled.div`
  float: left;
  font-size: 32px;
  padding: 0 10px 10px;
`;

export const MenuPanel = styled.div`
  float: left;
  background: #fff;
  width: 100%;
  height: max-content;
  padding-bottom: 10px;
  border-radius: 10px;
  margin: 30px 0px;
`;
export const MenuLinks = styled(LinkR)`
  display: flex;
  box-sizing: border-box;
  color: #111;
  font-weight: 600;
  with: 100%;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
`;

export const MenuTop = styled.div`
  box-sizing: border-box;
  color: #fff;
  font-weight: 600;
  with: 100%;
  display: flex;
  background: #1c1c1c;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 10px 10px 0px 0px;

`;

export const TransactionIcon = styled(TbBrandMixpanel)`
  color: #111;
  margin-top: 1px;
  margin-right: 10px;
  font-size: 22px;
`;

export const TransferIcon = styled(BiTransfer)`
  color: #111;
  margin-top: 1px;
  margin-right: 10px;
  font-size: 22px;
`;

export const SettingsIcon = styled(TbSettings)`
  color: #111;
  margin-top: 1px;
  margin-right: 10px;
  font-size: 22px;
`;