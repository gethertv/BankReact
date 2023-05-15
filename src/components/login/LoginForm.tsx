import {useFormik} from "formik";
import {useSignIn, useSignOut} from "react-auth-kit";
import styled from "styled-components";
import {BtnInput, ErrorBox, ErrorText, FormBox, InputBox, LoginInput, UpperInfo} from "./FormElements";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const LoginForm = () => {

    const signIn = useSignIn();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        console.log("#1");

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/auth/authenticate",
                values
            );
            signIn({
                token: response.data.access_token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {
                    id: response.data.id,
                    email: values.email,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname
                },
            });

            console.log(response);
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('numberAccount', response.data.number_account);
            setErrorMessage(undefined);
            navigate("/panel");
        } catch (err) {
            const data: any = err;
            //console.log(err)
            var errorInfo = data.response.data.errorMessage;
            console.log(errorInfo);
            setErrorMessage(errorInfo);
        }

    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit,
    });

    return (
        <FormBox>
            {errorMessage && (
                <ErrorBox>
                    <ErrorText>{errorMessage}</ErrorText>
                </ErrorBox>
            )}
            <form onSubmit={formik.handleSubmit}>

                <InputBox>
                    <UpperInfo>Email</UpperInfo>
                    <LoginInput
                        type="text"
                        id="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </InputBox>

                <InputBox>
                    <UpperInfo>Passwod</UpperInfo>
                    <LoginInput
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </InputBox>

                <BtnInput
                    type="submit"
                    id="sumbit"
                    value="Zaloguj sie!"
                />
            </form>
        </FormBox>

    );
}


export default LoginForm;