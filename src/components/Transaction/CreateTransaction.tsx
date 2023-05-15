import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import {CreateBox} from "./TransactionElemetns";
import {
    BtnInput,
    ErrorBox,
    ErrorText,
    InputBox,
    LoginInput,
    SuccessBox,
    SuccessText,
    UpperInfo
} from "../login/FormElements";
import Balance from "../Pages/Panel/Balance";

const CreateTransaction = ( refreshBalance: any ) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");
    const [fromAccountNumber] = useState(localStorage.getItem("numberAccount") || "");

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api/v1',
        headers: {
            common: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    });


    const onSubmit = async (values: any) => {
        console.log("#createTransaction");

        axiosInstance.post(`/transactions/create`, values)
            .then(response => {
                console.log(':', response);
                setErrorMessage("");
                setSuccess(response.data.message);
                formik.resetForm();
                refreshBalance();
            })
            .catch(error => {
                setErrorMessage(error.response.data.message);
                setSuccess("");
            });
    };

    const formik = useFormik({
        initialValues: {
            fromAccountNumber,
            amount: "",
            toAccountNumber: "",
            title: "",
            address: ""
        },
        onSubmit,
    });

    return (
        <CreateBox>
            {errorMessage && (
                <ErrorBox>
                    <ErrorText>{errorMessage}</ErrorText>
                </ErrorBox>
            )}
            {success && (
                <SuccessBox>
                    <SuccessText>{success}</SuccessText>
                </SuccessBox>
            )}
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="hidden"
                    id="fromAccountNumber"
                    name="fromAccountNumber"
                    value={localStorage.getItem("numberAccount") || ""}
                />

                <InputBox>
                    <UpperInfo>Tytuł</UpperInfo>
                    <LoginInput
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Tytuł"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </InputBox>

                <InputBox>
                    <UpperInfo>Adres</UpperInfo>
                    <LoginInput
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Adres"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />
                </InputBox>

                <InputBox>
                    <UpperInfo>Kwota</UpperInfo>
                    <LoginInput
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="Kwota"
                        onChange={formik.handleChange}
                        value={formik.values.amount}
                    />
                </InputBox>

                <InputBox>
                    <UpperInfo>Numer konta odbiorcy</UpperInfo>
                    <LoginInput
                        type="text"
                        id="toAccountNumber"
                        name="toAccountNumber"
                        placeholder="Numer konta odbiorcy"
                        onChange={formik.handleChange}
                        value={formik.values.toAccountNumber}
                    />
                </InputBox>

                <BtnInput type="submit" id="submit" value="Wyślij przelew" />
            </form>
        </CreateBox>
    );
};

export default CreateTransaction