import styled, {css} from "styled-components";

export const CreateBox = styled.div`
  display: grid;
  width: 60%;
  margin: 30px auto;
  align-content: center;
  background: #ffffff;
  padding: 20px;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const TransactionTitle = styled.p`
  margin: 0;
`;
interface TransactionAmountProps {
    highlighted: boolean;
}
export const TransactionAmount = styled.p<TransactionAmountProps>`
  margin: 0;
  ${({ highlighted }) =>
          highlighted &&
          css`
      color: red;
    `}
`;

export const BtnPage = styled.div`
  display: grid;;
  outline: none;
  border: none;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 0px auto;
  color: rgb(255, 255, 255);
  border-radius: 40px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  background: linear-gradient(to right, rgb(95, 95, 95), rgb(50, 50, 50));
`;