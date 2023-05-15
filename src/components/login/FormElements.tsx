import styled from "styled-components";

export const FormBox = styled.div`
  width:300px;
  
`;
export const InputBox = styled.div`
  display: grid;
  margin: 30px 0px;
`;
export const LoginInput = styled.input`
  color: #111;
  font-size: 16px;
  padding: 10px 20px 10px 0;
  border: none;
  border-bottom: 2px solid #303030;
  outline: none;
`;

export const UpperInfo = styled.div`
  color: #858585;
  font-weight: 400;
  font-size:12px;
  text-transform: uppercase;
`;

export const BtnInput = styled.input`
  display: grid;;
  outline: none;
  border: none;
  width: 200px;
  height: 50px;
  margin: 0px auto;
  color: rgb(255, 255, 255);
  border-radius: 40px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  background: linear-gradient(to right, rgb(95, 95, 95), rgb(50, 50, 50));
`;

export const ErrorBox = styled.div`
  display: grid;
  background-color: #ffd6d6;
  color: #d8000c;
  padding: 5px 20px;
  border-radius: 4px;
  text-align: center;
`;

export const ErrorText = styled.div`
  word-break: break-word;
`;

export const SuccessBox = styled.div`
  display: grid;
  background-color: #aeff4e;
  color: #111;
  padding: 5px 20px;
  border-radius: 4px;
  text-align: center;
`;

export const SuccessText = styled.div`
  word-break: break-word;
`;

