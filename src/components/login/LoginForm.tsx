import {useFormik} from "formik";
import axios, {AxiosError} from "axios";
import { useSignIn } from "react-auth-kit";
import styled from "styled-components";
import {BtnInput, ErrorBox, ErrorText, FormBox, InputBox, LoginInput, UpperInfo} from "./FormElements";
import {useState} from "react";
const LoginForm = () => {

    const signIn = useSignIn();
    const [errorMessage, setErrorMessage] = useState();


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
                authState: { email: values.email}
            });
            setErrorMessage(undefined);
        } catch (err) {
            const data: any = err;
            var errorInfo = data.response.data.errorMessage;
            //console.log(errorInfo);
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